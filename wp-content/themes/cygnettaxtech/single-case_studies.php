<?php
$pdfLink = get_field('pdf_link', $post->ID);

$post_type = get_post_type_object( get_post_type($post) ); 
$post_type_name = $post_type->labels->singular_name;

get_header();
if (have_posts()) :
    while (have_posts()) : the_post(); ?>
        <!-- Banner Slider start -->
		<?php
            $featured_img_url = get_the_post_thumbnail_url(get_the_ID(), '1920w');
        ?>
        <div class="case-study">
		 <div class="banner-content w-100" <?php if ($featured_img_url) : ?> style="background-image: url('<?php echo $featured_img_url; ?>')" <?php endif; ?>>  
				
                    <div class="banner-caption text-white">
                        <h1 class="banner-title text-white">
                            <?php the_title(); ?>
                        </h1>
                    </div>
					 <!-- <div class="mb-5">
						<div class="author-share-block mb-3">
							<ul class="author-block mb-0 list-unstyled d-flex flex-wrap">
								<li>
									<?php the_date(); ?>
								</li>
							</ul>
						</div>
					</div> -->
              
			</div>    		
        <!-- Banner Slider end -->
        <div>
            <section class="bg-light no-min-height pt-0">
              
                    <div class="blog-detail">
                        <!--<div class="blog-share-social d-none d-xl-block">
                            <div class="sidebar-social">
                                <div class="share-social-box">
                                    <a href="javascript:void(0)" title="Share" class="share-btn"><i class="bi bi-share" aria-hidden="true"></i></a>
                                    <?php echo sharethis_inline_buttons(); ?>
                                </div>
                            </div>
                        </div>-->
                        <div class="container section-container-padding pt-0 pb-0">
                            <div class="single-container">
                                <div class="article-container">
                                    <div class="row">
                                        <div class="col-md-7 col-lg-8 mb-5 mb-md-0">
                                            <article class="blog-contents pe-md-3 pe-xl-4 pe-xxl-5">
                                                <h2 class="section-title mb-3">Summary</h2>
                                                <!--<div class="blog-share-social d-xl-none mb-5">
                                                    <div class="sidebar-social">
                                                        <div class="share-social-box">
                                                            <a href="javascript:void(0)" title="Share" class="share-btn"><i class="bi bi-share" aria-hidden="true"></i></a>
                                                            <?php echo sharethis_inline_buttons(); ?>
                                                        </div>
                                                    </div>
                                                </div>-->
                                                <?php the_content(); ?>
                                            </article>
                                        </div>
                                        <div class="col-md-5 col-lg-4">
                                            <aside class="sidebar">
                                                <div class="sidebar-inner">
                                                    <div id="download_my_copy" class="sidebar-block">
                                                        <div class="sidebar-title">
                                                            <h4>Download My Copy</h4>
                                                        </div>
                                                        <div class="sidebar-block-body">
                                                            <?php echo do_shortcode('[contact-form-7 id="41335" title="Detail page download form"]'); ?>
                                                        </div>
                                                    </div>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
            </section>
        </div>
            </div>
<?php endwhile;
endif; ?>

<!-- Download PDF after submit -->
<script>
    var siteurl = '<?php echo $pdfLink; ?>';
    if (siteurl) {
        document.addEventListener('wpcf7mailsent', function(e) {
            if (e.detail.contactFormId == 41335) {
                var pdfurl = siteurl ? siteurl : '';

                e.stopPropagation();
                // You can place extra checks here.
                var tab = window.open(pdfurl, '_blank');
                tab.focus();
            }
        }, false);
    }
	
	jQuery(".wpcf7-select").prepend("<option value='' selected='selected'>Select country*</option>");
	
	jQuery( document ).ready(function() {
		jQuery('#custom_post_type').val("<?php echo $post_type_name; ?>");
		
		jQuery('#pdfurl').val("<?php echo $pdfLink; ?>");
	});
</script>

<?php get_footer(); ?>