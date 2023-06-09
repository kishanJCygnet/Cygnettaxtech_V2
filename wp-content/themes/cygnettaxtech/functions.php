<?php
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() { 
$parenthandle = 'twentytwentyone-style'; // This is 'twentyfifteen-style' for the Twenty Fifteen theme.
    $theme = wp_get_theme();
    wp_enqueue_style( $parenthandle, get_template_directory_uri() . '/style.css', 
        array(),  // if the parent theme code has a dependency, copy it to here
        $theme->parent()->get('Version')
    );
	
    wp_enqueue_style( 'cygnettaxtech-style', get_stylesheet_uri());
	//wp_enqueue_style('bootstrap.min', get_template_directory_uri() . '/bootstrap.min.css');
	
    /*wp_localize_script('cygnet-global', 'ajaxPath', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
    ));*/
}

//Custom walker class file include for Wp navigation menu.
require_once('inc/custom-wp-walker-class.php');

require_once('inc/ajax_functions_group.php');

/**
 * Advanced custom field option page
 */
if (function_exists('acf_add_options_page')) {

    acf_add_options_page(array(
        'page_title'  => 'Theme Options',
        'menu_title'  => 'Theme Options',
        'menu_slug'   => 'theme-options',
        'capability'  => 'edit_posts',
        'redirect'    => false
    ));
}

/**
  Function name : cygnettaxtech_setup
  Sets up theme defaults and registers support for various WordPress features.
  Note that this function is hooked into the after_setup_theme hook, which
  runs before the init hook. The init hook is too late for some features, such
  as indicating support for post thumbnail .
 */
function cygnettaxtech_setup()
{
    //Load cygnettaxtech-deparments theme
    load_theme_textdomain('cygnettaxtech');
    //Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');
    //Add the size of featured image on posts and pages.
    //add_image_size('cygnettaxtech_setup-featured-image', 2000, 1200, true);
    //Switch default core markup for search form, comment form, and comments to output valid HTML5.
    add_theme_support('html5', array(
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    //Enable support for Post Formats.
    add_theme_support('post-formats', array(
        'aside',
        'image',
        'video',
        'quote',
        'link',
        'gallery',
        'audio',
    ));

    update_option('image_default_link_type', 'none');
    // This theme uses wp_nav_menu() in two locations.
    register_nav_menus(
        array(
            'header_menu' => __('Header Menu', 'cygnettaxtech'),
            'footer_menu' => __('Footer Menu', 'cygnettaxtech'),
            'menu_above_search' => __('Menu Above Search', 'cygnettaxtech')
        )
    );
    //Add different image sizes
    /*add_image_size('400w', 400);
    add_image_size('800w', 800);
    add_image_size('1250w', 1250);
    add_image_size('1920w', 1900);*/
}
add_action('after_setup_theme', 'cygnettaxtech_setup');


/* Added code 22-3-2022 */
/* Remove Query Strings */
function remove_cssjs_ver($src)
{
    if (strpos($src, '?ver='))
        $src = remove_query_arg('ver', $src);
    return $src;
}
add_filter('style_loader_src', 'remove_cssjs_ver', 10, 2);
//add_filter('script_loader_src', 'remove_cssjs_ver', 10, 2);
/* Remove RSD Links */
remove_action('wp_head', 'rsd_link');
/* Disable Emoticons */
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('admin_print_styles', 'print_emoji_styles');
/* Remove Shortlink */
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
/* Disable Embeds */
function disable_embed()
{
    wp_dequeue_script('wp-embed');
}
add_action('wp_footer', 'disable_embed');
/* Hide WordPress Version */
remove_action('wp_head', 'wp_generator');
/* Remove WLManifest Link */
remove_action('wp_head', 'wlwmanifest_link');
/* Remove JQuery Migrate */
/* function deregister_qjuery()
{
    if (!is_admin()) {
        wp_deregister_script('jquery');
    }
}
add_action('wp_enqueue_scripts', 'deregister_qjuery'); */
/* Disable Self Pingback */
function disable_pingback(&$links)
{
    foreach ($links as $l => $link)
        if (0 === strpos($link, get_option('home')))
            unset($links[$l]);
}
add_action('pre_ping', 'disable_pingback');

/* Disable Heartbeat */
add_action('init', 'stop_heartbeat', 1);
function stop_heartbeat()
{
    wp_deregister_script('heartbeat');
}
/* Disable Dashicons on Front-end */
function wpdocs_dequeue_dashicon()
{
    if (current_user_can('update_core')) {
        return;
    }
    wp_deregister_style('dashicons');
}
add_action('wp_enqueue_scripts', 'wpdocs_dequeue_dashicon');
function add_rel_preload($html, $handle, $href, $media)
{

    if (is_admin())
        return $html;

    $html = <<<EOT
<link rel='preload stylesheet' as='style' onload="this.onload=null;this.rel='preload stylesheet'" id='$handle' href='$href' type='text/css' media='all' />
EOT;
    return $html;
}
add_filter('style_loader_tag', 'add_rel_preload', 10, 4);
function defer_parsing_of_js($url)
{
    if (is_user_logged_in()) return $url; //don't break WP Admin
    // if (FALSE === strpos($url, '.js', '.jgz')) return $url;
    if (strpos($url, 'jquery.min.js')) return $url;
	if (strpos($url, 'primary-navigation.js')) return $url;
    return str_replace(' src', ' defer src', $url);
}
add_filter('script_loader_tag', 'defer_parsing_of_js', 10);
/**
 * Remove the WordPress version
 */
add_filter('the_generator', '__return_false');
/**
 * Disable HTML in WordPress comments
 */
add_filter('pre_comment_content', 'esc_html');
/**
 * Enqueue scripts and styles admin.
 */
function cygnet_add_editor_css()
{
    wp_enqueue_style('admin-main-css', get_theme_file_uri('/assets/css/admin_style.css'), array(), '', 'all');
}
add_action('admin_enqueue_scripts', 'cygnet_add_editor_css');
/**
 * Disable WordPress Login Hints
 */
function no_wordpress_errors()
{
    return 'Please try the right user/pass combination';
}
add_filter('login_errors', 'no_wordpress_errors');
/* End code 22-3-2022 */

/**
 * Testimonials Shortcode
 */
add_shortcode('testimonials', 'testimonial_slider');
function testimonial_slider()
{
    ob_start();
    global $post;
    $currPageId = $post->ID;
    $testimonials = get_sub_field('select_testimonials', $currPageId);
	//$testimonials = get_field('choose_testimonials', $currPageId);
	
    if ($testimonials && count($testimonials) > 0) :?>
        <section class="testimonial-section <?php echo the_sub_field('testimonials_section_custom_class'); ?>">
            <div class="container">
				<div class="title-heading">
					<?php if (get_sub_field('testimonials_title')){ ?>
						<h2 class="wow fadeInUp" data-wow-offset="50"><?php echo the_sub_field('testimonials_title'); ?>
							<span class="heading-border"></span>
						</h2>
					<?php } ?>
					<?php if (get_sub_field('testimonials_sub_title')){ ?>
						<h3 class="wow fadeInUp" data-wow-offset="50"><?php echo the_sub_field('testimonials_sub_title'); ?></h3>
					<?php } ?>
				</div>
				<?php /*if (get_field('testimonial_title', 'option')) : ?>
					<div class="title-heading">
						<h2 class="wow fadeInUp" data-wow-offset="50"><?php echo the_field('testimonial_title', 'option'); ?> <span class="heading-border"></span></h2>
					</div>
				<?php endif; */ ?>                  
                    <div class="testimonial-slider">
                       <?php foreach ($testimonials as $testimonial) :?>
						<div>
                            <div class="testimonial-content d-flex">
                                <!-- <div class="client-details text-dark-blue wow fadeIn" >
                                    <?php if (get_field('image', $testimonial->ID)) { 
											$imageID = attachment_url_to_postid( get_field('image', $testimonial->ID) );
											$alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true); ?>
                                            <img src="<?php echo the_field('image', $testimonial->ID); ?>" alt="<?php echo $alt_text; ?>">
                                    <?php } ?>                                    
                                </div> -->
                                <div class="short-decoration">
                                    <p class="p2 wow fadeInUp"  data-wow-delay="0.9s">
										   <?php                                  
										   $testimonialContent = $testimonial->post_content;
											echo wp_trim_words( $testimonial->post_content, 250 );
										   ?>
                                   </p>
                                    <h3 class="p1 wow fadeInUp" data-wow-delay="0.3s" ><?php echo $testimonial->post_title;?></h3>
                                    <div class="designation wow fadeInUp"  data-wow-delay="0.6s">
										<?php if (get_field('designation', $testimonial->ID)) {
                                            echo the_field('designation', $testimonial->ID);
                                        } ?>
									</div>
                                </div>                                   
                            </div>
						</div>
                       <?php endforeach;?>
                    </div>                
            </div>
        </section>
		<script>
		jQuery(document).ready(function() {
			jQuery('.testimonial-slider').length && jQuery('.testimonial-slider').slick({
				infinite: true,							
				autoplay: true,
				autoplaySpeed:3000,	
				arrows: true,
				dots: false,				
				slidesToShow: 3,
				prevArrow: "<i class='far fa-angle-right'></i>",
				nextArrow: "<i class='far fa-angle-left'></i>",
				responsive : [
											// breakpoint from 0 up
											{  breakpoint: 0,
											   settings : {
												slidesToShow:1,
												margin: 20,
												}
											},
											{  breakpoint: 768,
											   settings : {
													margin: 20,
													slidesToShow:1,
												}
											},
											{  breakpoint: 992,
											   settings : {
													margin: 40,
													slidesToShow:2,
												}
											},											
									]             
				
			})
		})
		</script>
   <?php
        $testimonialVar = ob_get_clean();
        return $testimonialVar;
    endif;
}

/**
 * Insights Shortcode
 */
add_shortcode('insights', 'insights_slider');
function insights_slider()
{
    ob_start();
    global $post;
    $currPageId = $post->ID;
    $insights = get_sub_field('select_insights', $currPageId);
	
    if ($insights && count($insights) > 0) :?>
        <section class="insights-section light-bg <?php echo the_sub_field('insights_section_custom_class'); ?>">
            <div class="container">
                <div class="title-heading">
                    <?php if (get_field('insight_title', 'option')) : ?>
                        <h2 class="wow fadeInUp" data-wow-offset="50"><?php echo the_field('insight_title', 'option'); ?> <span class="heading-border"></span></h2>
                    <?php endif; ?>
                </div>
                <div class="insights-inner">
                <?php foreach ($insights as $insights) :
					   $img = wp_get_attachment_image_src( get_post_thumbnail_id($insights->ID), 'large');
					   ?>
                        <div class="insights-card card wow fadeInUp" data-wow-delay="<?php echo $s; ?>s" data-wow-offset="50">
                            <div class="insights-content card-body">
								<?php 
								$post_type = get_post_type_object(get_post_type($insights->ID));
								//echo "<pre>";print_r($post_type);
								if($post_type->labels->singular_name == 'Post'){
									$display_cpt_title = "Blog";
									$url = site_url().'/blog';
								} else {
									$display_cpt_title = $post_type->labels->singular_name;
									$url = site_url().'/'.$post_type->rewrite['slug'];
								}								
								?>
								<a href="<?php echo $url; ?>" class="btn"><?php echo $display_cpt_title; ?></a>								
                                <div class="client-details" <?php if ((has_post_thumbnail( $insights->ID ) )) { ?>style="background-image:url('<?php echo $img[0]; ?>')" <?php } ?> >
                                
                                </div>
                                <div class="insight-in-content">
                                    <h2 class="slider-title">
										<?php
										if($post_type->labels->singular_name == 'Case Study'){
											?><a href="<?php echo get_field('pdf_link', $insights->ID); ?>" target="_blank"><?php echo $insights->post_title;?></a><?php
										} else {
											?><a href="<?php echo esc_url( get_permalink($insights->ID) ); ?>"><?php echo $insights->post_title;?></a><?php
										}
										?>										
									</h2>
                                    <div class="short-decoration">
                                       <p class="p2">
                                       <?php
                                        $insightsContent = $insights->post_content;
                                        echo wp_trim_words( $insights->post_content, 20 );
                                        ?>
                                        <p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php $s = $s + 0.2; endforeach;?>
                </div>
            </div>
        </section>
   <?php
        $insightsVar = ob_get_clean();
        return $insightsVar;
    endif;
}

/**
 * Case Studies Shortcode
 */
add_shortcode('case_studies', 'case_studies_slider');
function case_studies_slider()
{
    ob_start();
    global $post;
    $currPageId = $post->ID;
    $case_studies = get_sub_field('select_case_studies', $currPageId);
	
    if ($case_studies && count($case_studies) > 0) :?>
        <script>
		jQuery(document).ready(function() {
			jQuery('.case-studies-slider').length && jQuery('.case-studies-slider').owlCarousel({
				loop: false,
				
				autoplay: false,
				nav: false,
				dots: true,
				items: 3,
				navText: [
					'<span><i class=\'bi bi-chevron-left\'></i></span>Previous',
					'Next<span><i class=\'bi bi-chevron-right\'></i></span>'
				],
                responsive : {
                        // breakpoint from 0 up
                        0 : {
                            margin: 15,
                            items: 1,
                        },
                        768 : {
                            margin: 15,
                            items: 2,
                        },
                        992 : {
                            margin: 20,
                            items: 3,
                        },
                        1200 : {
                            margin: 40,
                        },
                    }	
				
			})
		})
		</script>
        <section class="insights-section light-bg <?php echo the_sub_field('case_studies_section_custom_class'); ?>">
            <div class="container">
                <div class="title-heading">
                    <?php if (get_sub_field('title')) : ?>
                        <h2 class="wow fadeInUp" data-wow-offset="50"><?php echo the_sub_field('title'); ?> <span class="heading-border"></span></h2>
                    <?php endif; ?>
                </div>
                <div class="insights-inner">
					<div class="owl-carousel case-studies-slider">
						<?php foreach ($case_studies as $case_studies) :
						   $img = wp_get_attachment_image_src( get_post_thumbnail_id($case_studies->ID), 'full');
						   $casestudy_url = get_field('pdf_link', $case_studies->ID);
						   ?>
							<div class="insights-card card wow fadeInUp" data-wow-delay="<?php echo $s; ?>s" data-wow-offset="30" >
								<div class="insights-content card-body">
									<?php 
									/*$post_type = get_post_type_object(get_post_type($case_studies->ID));
									if($post_type->labels->singular_name == 'Post'){
										$display_cpt_title = "Blog";
									} else {
										$display_cpt_title = $post_type->labels->singular_name;
									}*/
									//esc_url( get_permalink($case_studies->ID) )
									?>
									<!--<span class="btn"><?php echo $display_cpt_title; ?></span>-->							
									<div class="client-details" <?php if ((has_post_thumbnail( $case_studies->ID ) )) { ?>style="background-image:url('<?php echo $img[0]; ?>')" <?php } ?> >
									
									</div>
									<div class="insight-in-content">
										<h2 class="slider-title"><a href="<?php echo $casestudy_url; ?>" target="_blank"><?php echo $case_studies->post_title;?></a></h2>
										<div class="short-decoration">
										   <p class="p2">
										   <?php
											$case_studiesContent = $case_studies->post_content;
											echo wp_trim_words( $case_studies->post_content, 250 );
											?>
											</p>
										</div>
										<?php if ($casestudy_url != '') : ?>
											  <a href="<?php echo $casestudy_url; ?>" title="Read More" target="_blank">Read More <img src="<?php echo THEME_PATH; ?>/images/Iconfeather-arrow-right.svg" alt="navigation right" /></a>											
										<?php endif; ?>
										<!--<a href="<?php echo esc_url( get_permalink($case_studies->ID) ); ?>" class="">Read More <img src="<?php echo THEME_PATH; ?>/images/Iconfeather-arrow-right.svg" alt="navigation right" /> </a>-->
									</div>
								</div>
							</div>
						<?php $s = $s + 0.2; endforeach;?>
					</div>
                </div>
            </div>
        </section>
		
   <?php
        $case_studiesVar = ob_get_clean();
        return $case_studiesVar;
    endif;
}

/* Custom URL Rewriting for Blog Detail */
function filter_post_link($permalink, $post)
{
    if ($post->post_type != 'post')
        return $permalink;
    return 'blog' . $permalink;
}
add_filter('pre_post_link', 'filter_post_link', 10, 2);

add_action('generate_rewrite_rules', 'add_blog_rewrites');
function add_blog_rewrites($wp_rewrite)
{
    $wp_rewrite->rules = array(
        'blog/([^/]+)/?$' => 'index.php?name=$matches[1]',
        'blog/[^/]+/attachment/([^/]+)/?$' => 'index.php?attachment=$matches[1]',
        'blog/[^/]+/attachment/([^/]+)/trackback/?$' => 'index.php?attachment=$matches[1]&tb=1',
        'blog/[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$' => 'index.php?attachment=$matches[1]&feed=$matches[2]',
        'blog/[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$' => 'index.php?attachment=$matches[1]&feed=$matches[2]',
        'blog/[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$' => 'index.php?attachment=$matches[1]&cpage=$matches[2]',
        'blog/([^/]+)/trackback/?$' => 'index.php?name=$matches[1]&tb=1',
        'blog/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$' => 'index.php?name=$matches[1]&feed=$matches[2]',
        'blog/([^/]+)/(feed|rdf|rss|rss2|atom)/?$' => 'index.php?name=$matches[1]&feed=$matches[2]',
        'blog/([^/]+)/page/?([0-9]{1,})/?$' => 'index.php?name=$matches[1]&paged=$matches[2]',
        'blog/([^/]+)/comment-page-([0-9]{1,})/?$' => 'index.php?name=$matches[1]&cpage=$matches[2]',
        'blog/([^/]+)(/[0-9]+)?/?$' => 'index.php?name=$matches[1]&page=$matches[2]',
        'blog/[^/]+/([^/]+)/?$' => 'index.php?attachment=$matches[1]',
        'blog/[^/]+/([^/]+)/trackback/?$' => 'index.php?attachment=$matches[1]&tb=1',
        'blog/[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$' => 'index.php?attachment=$matches[1]&feed=$matches[2]',
        'blog/[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$' => 'index.php?attachment=$matches[1]&feed=$matches[2]',
        'blog/[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$' => 'index.php?attachment=$matches[1]&cpage=$matches[2]',
    ) + $wp_rewrite->rules;
}
/* End */

function pagely_security_headers( $headers ) {
    $headers['X-XSS-Protection'] = '1; mode=block';
    $headers['X-Content-Type-Options'] = 'nosniff';
    $headers['X-Content-Security-Policy'] = 'default-src \'self\'; script-src \'self\';';

    return $headers;
}

add_filter( 'wp_headers', 'pagely_security_headers' );

/** 
 * Enables the HTTP Strict Transport Security (HSTS) header in WordPress. 
 */
function tg_enable_strict_transport_security_hsts_header_wordpress() {
    header( 'Strict-Transport-Security: max-age=31536000' );
}
add_action( 'send_headers', 'tg_enable_strict_transport_security_hsts_header_wordpress' ); 

/**
* Remove custom post type within search page
*/
function remove_post_type_page_from_search() {
     global $wp_post_types;
     $wp_post_types['testimonials']->exclude_from_search = true;
     $wp_post_types['case_studies']->exclude_from_search = true;
}
add_action('init', 'remove_post_type_page_from_search');

function favicon4admin() {
echo '<link rel="icon" type="image/x-icon" href="' . get_theme_file_uri() . '/images/favicons/favicon.ico" />';
}
add_action( 'admin_head', 'favicon4admin' );

/* Download functinality */
add_action('wp_ajax_get_verify_email_data', 'get_verify_email_data');
add_action('wp_ajax_nopriv_get_verify_email_data', 'get_verify_email_data');

function get_verify_email_data()
{
	$FourDigitRandomNumber = rand(1231,7879);
	//$email = 'priyank.patel@cygnetinfotech.com';
	$email = $_REQUEST['email_val'];
	$subject = 'Email Verification OTP';
	$new_message ='Thank you for your interest in vendor compliance report based on GRC Score.<br/>
				Please find below your One Time Password (OTP) for email verification.<br/><br/>
				OTP: '.$FourDigitRandomNumber;
	$new_message .='<br/><br/>Copy and paste this OTP on the website for verification, post which you will be able to download full sample report.<br/><br/>
				If you face any trouble verifying your email id, please write to us at <a href="mailto:hello@cygnetfintech.com">hello@cygnetfintech.com</a><br/><br/>
				Regards,<br/>Cygnet Fintech<br/><br/>';
	$headers = array('Content-Type: text/html; charset=UTF-8');
	wp_mail( $email, $subject, $new_message, $headers );
	echo $FourDigitRandomNumber;
}


/* R7VAT Landing page api call -- Test API */
function getauthtoken_taxtech_app(){
    $curl = curl_init();

	curl_setopt_array($curl, array(
	  //CURLOPT_URL => 'https://qa-api-uae.cygnetvat.com/v0.1/authenticate/token',  // Test URL
	  CURLOPT_URL => 'https://r7vatgcccomplianceapi.cygnettaxtech.com/v0.1/authenticate/token',   //Live URL
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_HTTPHEADER => array(
		'clientid: 5H2+oKwElTe9ORKdTuW9gXxA7zQyqEe5cEb+u0aphjLRtYBSu2ZN2sBwprIb29wbBJ9iMH/AqEaIQoaRHORAYXsKrHC2zRv5U76nVxlrV3NC3ZNWQKHg3k7HvV+kVRPo',  // Live id
		'client-secret: IBc1V5vigPLZIqNur5luSg5cICgVr77/t2w9nlZsYwN1FQRQXj4NrUtRiV72FJoDSIKejALCZGrqy4XJV5ouVsL1zrWbPIEHEI27rF0e8DJkA3d4AOEZ6lUgEjA1cBCFWXk3xJsGbDEudVCL9taBo544VE93NE47g7AsB2eyIdLivlxvfVMxcq8n2KeKacPx8ReFeZQktvYCdcXkQ379Wr3mAD2JvN6hFIkx99cqzOQAcrKg38Ff2u7yyIpjgDNZ',  // Live id
		//'clientid: lWfZRvu4Us/bORPydcufO6gLpecmFoOIf/GJ0XJe6ioIMudgohJEFHS5kYlHwO3k1lRk82Qpd5CNj+owFRf8NN+RG+LwGiLIK2PmGAdmG3HhwoVMriUw9k4CK1ThnT7b',  // Test id
		//'client-secret: gLgD7KjvjENbC5eBhT7jLCQtX4V0H77jnUv3z72qLE+370A5I8Uzuajw5fHQee7Ae0NsX5din4bQ5HrGmHU3/3cxWE4g9NFbLRBI6Rm5EdhEo+E00gVQ2FooA6QQOyx2+h4TPr2MZ31gtOu/cF/NqiXTNgUSPFR5TnMknVmW/uc48z3RMKzgBAWhy78J3y1xUA4Rl3PTkmaP8j6jkFzQd3FndCNjPmNUeRQFXLL6S5gh92PpPs18EcVN6HQnekQR',  // Test id
		'ip-usr: 172.16.33.99',
		'Content-Type: application/json',
		'Content-Length: 0'
	  ),
	));

	$response = curl_exec($curl);

	curl_close($curl);

    return $response;
}

add_action( 'wpcf7_before_send_mail', 'RegisterNewUser_taxtech', 10, 3 );

function RegisterNewUser_taxtech($cf7, &$abort, $submission){
	
	if ($cf7->id() == 43625) {		
		$accesstoken = getauthtoken_taxtech_app();
		$accesstoken = json_decode($accesstoken,1);
		$accesstoken = $accesstoken['data']['auth-token'];
		//echo "<pre>";print_r($_REQUEST);exit;
		
		$subscriptionid = $_REQUEST['subscriptionid'];
		if($subscriptionid == 'Tax Consultant'){
			$subscriptionid = 1;
		} else if($subscriptionid == 'Corporate'){
			$subscriptionid = 2;
		} else {
			$subscriptionid = 1;
		}
		//$plantype = $_REQUEST['plantype'];
		$plantype = 1;
		//$planname = $_REQUEST['planname'];
		$planname = 'Trial';
		$email = $_REQUEST['r7vat-lp-email'];
		$password = $_REQUEST['password'];
		$firstname = $_REQUEST['r7vat-lp-name'];
		$lastname = $_REQUEST['lastname'];
		$mobilenumber = $_REQUEST['mobilenumber'];
		$phonenumber = $_REQUEST['r7vat-lp-contact'];
		$billingtrn = $_REQUEST['billingtrn'];
		$legalname = $_REQUEST['legalname'];
		$website = $_REQUEST['website'];
		$registeredaddressline1 = $_REQUEST['registeredaddressline1'];
		$registeredaddressline2 = $_REQUEST['registeredaddressline2'];
		$registeredstateid = $_REQUEST['registeredstateid'];
		$registeredcityid = $_REQUEST['registeredcityid'];
		$registeredpostalcode = $_REQUEST['registeredpostalcode'];
		$billingaddressline1 = $_REQUEST['billingaddressline1'];
		$billingaddressline2 = $_REQUEST['billingaddressline2'];
		$billingstateid = $_REQUEST['billingstateid'];
		$billingcityid = $_REQUEST['billingcityid'];
		$billingpostalcode = $_REQUEST['billingpostalcode'];
		$shippingaddressline1 = $_REQUEST['shippingaddressline1'];
		$shippingaddressline2 = $_REQUEST['shippingaddressline2'];
		$shippingstateid = $_REQUEST['shippingstateid'];
		$shippingcityid = $_REQUEST['shippingcityid'];
		$shippingpostalcode = $_REQUEST['shippingpostalcode'];
		//$IsAgreedToTermsAndConditions = $_REQUEST['IsAgreedToTermsAndConditions'];
		$IsAgreedToTermsAndConditions = 1;
		
		$curl = curl_init();

		curl_setopt_array($curl, array(
		  //CURLOPT_URL => 'https://qa-api-uae.cygnetvat.com/v0.1/subscriber/insertsubscriber',  // Test URL
		  CURLOPT_URL => 'https://r7vatgcccomplianceapi.cygnettaxtech.com/v0.1/subscriber/insertsubscriber',  // Live URL
		  CURLOPT_RETURNTRANSFER => true,
		  CURLOPT_ENCODING => '',
		  CURLOPT_MAXREDIRS => 10,
		  CURLOPT_TIMEOUT => 0,
		  CURLOPT_FOLLOWLOCATION => true,
		  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		  CURLOPT_CUSTOMREQUEST => 'POST',
		  CURLOPT_POSTFIELDS =>'{
			"subscriptionid": "'.$subscriptionid.'",
			"plantype": '.$plantype.',
			"planname": "'.$planname.'",
			"emailaddress": "'.$email.'",
			"password": "'.$password.'",
			"firstname": "'.$firstname.'",
			"lastname": "'.$lastname.'",
			"mobilenumber": "'.$mobilenumber.'",
			"phonenumber": "'.$phone.'",
			"billingtrn": "'.$billingtrn.'",
			"legalname": "'.$legalname.'",
			"website": "'.$website.'",
			"registeredaddressline1": "'.$registeredaddressline1.'",
			"registeredaddressline2": "'.$registeredaddressline2.'",
			"registeredstateid": "'.$registeredstateid.'",
			"registeredcityid": "'.$registeredcityid.'",
			"registeredpostalcode": "'.$registeredpostalcode.'",
			"billingaddressline1": "'.$billingaddressline1.'",
			"billingaddressline2": "'.$billingaddressline2.'",
			"billingstateid": "'.$billingstateid.'",
			"billingcityid": "'.$billingcityid.'",
			"billingpostalcode": "'.$billingpostalcode.'",
			"shippingaddressline1": "'.$shippingaddressline1.'",
			"shippingaddressline2": "'.$shippingaddressline2.'",
			"shippingstateid": "'.$shippingstateid.'",
			"shippingcityid": "'.$shippingcityid.'",
			"shippingpostalcode": "'.$shippingpostalcode.'",
			"IsAgreedToTermsAndConditions":"'.$IsAgreedToTermsAndConditions.'"
		}',
		  CURLOPT_HTTPHEADER => array(
			'clientid: 5H2+oKwElTe9ORKdTuW9gXxA7zQyqEe5cEb+u0aphjLRtYBSu2ZN2sBwprIb29wbBJ9iMH/AqEaIQoaRHORAYXsKrHC2zRv5U76nVxlrV3NC3ZNWQKHg3k7HvV+kVRPo',  // Live id
			'client-secret: IBc1V5vigPLZIqNur5luSg5cICgVr77/t2w9nlZsYwN1FQRQXj4NrUtRiV72FJoDSIKejALCZGrqy4XJV5ouVsL1zrWbPIEHEI27rF0e8DJkA3d4AOEZ6lUgEjA1cBCFWXk3xJsGbDEudVCL9taBo544VE93NE47g7AsB2eyIdLivlxvfVMxcq8n2KeKacPx8ReFeZQktvYCdcXkQ379Wr3mAD2JvN6hFIkx99cqzOQAcrKg38Ff2u7yyIpjgDNZ',  // Live id
			//'clientid: lWfZRvu4Us/bORPydcufO6gLpecmFoOIf/GJ0XJe6ioIMudgohJEFHS5kYlHwO3k1lRk82Qpd5CNj+owFRf8NN+RG+LwGiLIK2PmGAdmG3HhwoVMriUw9k4CK1ThnT7b',  // Test id
			//'client-secret: gLgD7KjvjENbC5eBhT7jLCQtX4V0H77jnUv3z72qLE+370A5I8Uzuajw5fHQee7Ae0NsX5din4bQ5HrGmHU3/3cxWE4g9NFbLRBI6Rm5EdhEo+E00gVQ2FooA6QQOyx2+h4TPr2MZ31gtOu/cF/NqiXTNgUSPFR5TnMknVmW/uc48z3RMKzgBAWhy78J3y1xUA4Rl3PTkmaP8j6jkFzQd3FndCNjPmNUeRQFXLL6S5gh92PpPs18EcVN6HQnekQR',  // Test id
			'ip-usr: 172.16.33.99',
			'Content-Type: application/json',
			'auth-token: '.$accesstoken,
			'User-Agent: '.$_SERVER['HTTP_USER_AGENT']
		  ),
		));

		$response = curl_exec($curl);
		
		curl_close($curl);
		
		$response_decode = json_decode($response,1);		
		$response_data = $response_decode['data']['result'];
		//echo "<pre>"; print_r($response_data); exit;
		$status = $response_data['status'];
		$errormessage = $response_data['errormessage'];
		$errorcode = $response_data['errorcode'];
		$successmessage = $response_data['successmessage'];
		if($successmessage != ''){
			//echo $successmessage;
			//exit;
			return;
		} else {
			if($errorcode == 'E004' || $errorcode == 'E017'){
				$errMsg = 'E004';//"Unable to process the request at this movement. Please contact us over an email.";
			} else {
				$errMsg = $errormessage;//"Unable to process the request at this movement. Please contact us over an email.";
			}
			$abort = true;
			$submission->set_response($cf7->message('validation_failed'));
			$submission->set_response($cf7->filter_message($errMsg)); //custom msg;
		}		
	}else{
		return;
	}

}

/* End R7VAT Landing page api call */

/* R7VAT Landing page contact form validation */
add_filter( 'wpcf7_validate_text*', 'alphanumeric_validation_filter', 20, 2 );

function alphanumeric_validation_filter( $result, $tag ) {
	$tag = new WPCF7_Shortcode( $tag );
	if ( 'r7vat-lp-name' == $tag->name ) {
		$name_of_the_input = isset( $_REQUEST['r7vat-lp-name'] ) ? trim( $_REQUEST['r7vat-lp-name'] ) : '';

		if ( !preg_match('/^[a-zA-Z]+$/',$name_of_the_input) ) {
			$result->invalidate( $tag, "Please enter valid name" );
		}
	}
	if ( 'lastname' == $tag->name ) {
		$name_of_the_input = isset( $_REQUEST['lastname'] ) ? trim( $_REQUEST['lastname'] ) : '';

		if ( !preg_match('/^[a-zA-Z]+$/',$name_of_the_input) ) {
			$result->invalidate( $tag, "Please enter valid name" );
		}
	}
	return $result;
}
/* End R7VAT Landing page contact form validation */

/* Spam email not stop code */
//add_filter('wpcf7_skip_spam_check', '__return_true');