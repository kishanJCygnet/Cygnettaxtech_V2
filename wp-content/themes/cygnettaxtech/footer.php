<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */
?>
	<section class="contact-form-content">
		<div class="contact-form">
			<div class="container" id="contactus">			
			<?php $post_slug = $post->post_name;
			//$post_slug != 'muwafaq-support-for-smes' &&
			if($post_slug != 'muwafaq-support-for-smes' && $post_slug != 'thank-you-for-contacting-us' && $post_slug != 'thank-you-for-your-interest-in-muwafaq-support' && !is_404() && $post_slug != 'thank-you-ksa-phase-2' && $post_slug != 'thank-you' && $post_slug != 'thank-you-for-downloading' && !is_404()){  ?>				
				<div class="title-heading">	
					<h2>Get in touch
						<span class="heading-border"></span>
					</h2>
				</div>
				<div class="form-content">
					<?php if(is_front_page()){ 
						echo do_shortcode('[contact-form-7 id="39050" title="Contact Us Home"]'); 
					} else {
						echo do_shortcode('[contact-form-7 id="172" title="Contact Us"]'); 
					}						
					?>
					<input type="hidden" value="contact_us" id="hd_type">
				</div>
			<?php } ?>
			<?php if($post_slug == 'muwafaq-support-for-smes'){ ?>
				<div class="title-heading">	
					<h2>Register with us
						<span class="heading-border"></span>
					</h2>
				</div>
				<div class="form-content">
					<?php echo do_shortcode('[contact-form-7 id="43625" title="R7VAT Landing Page API Form"]'); ?>
				</div>
				<div id="err-cf7-40804" style="display:none;margin: 2em 0.5em 1em;padding: 0.2em 1em;border:2px solid #dc3232;font-size: 14px;">
					Your user details are already available for R7VAT tool, <a href="https://r7vatgcccompliance.cygnettaxtech.com/login" target="_blank" style="color: #009999;">Click here</a> to login.
				</div>
			<?php } ?>			
			<?php //if ( is_front_page() ) : ?>
				<div class="technology-move">
					<div class="text-center"> <img src="<?php echo THEME_PATH; ?>images/phraise.png" alt="" /></div>
				</div>
			<?php //endif; ?>
			</div>
		</div>
	</section>
    <!-- Footer -->
    <footer class="footer" style="background-image:url('<?php echo THEME_PATH; ?>images/footer-curve.png')">
		<div>
			<div class="container">   
				<div class="footer-container">
					<div class="footer-contents d-flex justify-content-end">
						<!-- Footer logo begin -->
						<div class="footer-logo">
							<a href="<?php echo site_url(); ?>" title="Cygnet Fintech" alt="Cygnet Fintech">
								<span class="visually-hidden">Cygnet Fintech</span>
								<img src='<?php echo get_field("footer_logo", "option"); ?>' alt="Cygnet Fintech">
							</a>
						</div>
						<!-- Footer logo end -->
						<div>
							<!-- social links begin -->
							<div class="social-media mb-1">
								<span class="mb-md-0 fw-medium textPrimery">
									<span class="footer-item">
										<?php if (get_field('footer_inquiry_email', 'option')) : ?>
											<span class=" textSecondry">Inquiry :</span> 
											<a href="mailto:<?php echo the_field('footer_inquiry_email', 'option'); ?>"><?php echo the_field('footer_inquiry_email', 'option'); ?></a>
											<span class="v-divider mx-2"></span>
										<?php endif; ?>
										<?php if (get_field('footer_support_email', 'option')) : ?>
											<span class=" textSecondry">Support :</span> <a href="mailto:<?php echo the_field('footer_support_email', 'option'); ?>"><?php echo the_field('footer_support_email', 'option'); ?></a>
											<span class="v-divider mx-2"></span>
										<?php endif; ?>
										<?php if (get_field('footer_phone_number', 'option')) : ?>
											<span class=" textSecondry">Phone :</span> <a href="tel:<?php echo the_field('footer_phone_number', 'option'); ?>"><?php echo the_field('footer_phone_number', 'option'); ?></a>
										<?php endif; ?>
									</span>
									<span class="d-none landing-page-footer-item">
										<?php if (get_field('landing_page_footer_email')) : ?>
											<span class=" textSecondry">Inquiry :</span> 
											<a href="mailto:<?php echo the_field('landing_page_footer_email'); ?>"><?php echo the_field('landing_page_footer_email'); ?></a>
											<span class="v-divider mx-2"></span>
										<?php endif; ?>
										<?php if (get_field('landing_page_footer_phone_number')) : ?>
											<span class=" textSecondry">Phone :</span> <a href="tel:<?php echo str_replace(' ', '', get_field('landing_page_footer_phone_number')); ?>"><?php echo the_field('landing_page_footer_phone_number'); ?></a>
										<?php endif; ?>
									</span>
								</span>
							</div>
							<!-- social links end -->

							<!-- Copyright and footer links begin -->
							<div class="footer-links d-flex flex-wrap flex-column flex-md-row">
								<address
									class="copyright-text d-inline-flex mb-2 mb-md-0 justify-content-center justify-content-md-end fw-medium">
									Copyright – <?php echo date('Y'); ?> <?php echo the_field('copyright_text', 'option'); ?> </address>
								<div class="menu-footer-links-container" style="display:none;">
								<?php wp_nav_menu(array(
									'theme_location'  => 'footer_menu',
									'menu_class' => 'footer-links ps-0 d-inline-flex list-none mb-0 justify-content-center justify-content-md-end',
									'items_wrap'      => '<ul id="menu-footer-links" class="%2$s">%3$s</ul>',
									'echo'            => true
								  )); ?>
								</div>
								<div class="footer-sub-menu" style="display:none;">
									<?php wp_nav_menu(array(
										'theme_location'  => 'footer',
										'menu_class' => 'footer-links ps-0 d-inline-flex list-none mb-0 justify-content-center justify-content-md-end',
										'items_wrap'      => '<ul id="menu-footer-links" class="%2$s">%3$s</ul>',
										'echo'            => true
									  )); ?>
								</div>
							</div>
							<!-- Copyright and footer links end -->
						</div>
					</div>
				</div>
			</div>
		</div>
    </footer>
    <!-- End Footer -->
	
	<!-- Start Breadcrumb with link section -->
	<?php 
	if ( is_page() && $post->post_parent ) {
		$childpages = wp_list_pages( 'sort_column=menu_order&title_li=&child_of=' . $post->post_parent . '&echo=0&exclude='.$post->ID );
	} else {
		$childpages = wp_list_pages( 'sort_column=menu_order&title_li=&child_of=' . $post->ID . '&echo=0' );
	}
	if ( $childpages ) { ?>
		<div class="sticky-main-cls">
			<div class="sticky-left-cls">
				<?php if ( $post->post_parent ) { ?>
					<a href="<?php echo get_permalink( $post->post_parent ); ?>" ><?php echo get_the_title( $post->post_parent )." / "; ?></a>
				<?php } ?>
				<?php echo $post->post_title; ?>
			</div>
			<div class="sticky-right-cls">
				<?php echo $string = '<ul>'. $childpages . '</ul>';	?>
			</div>
		</div>
	<?php } ?>
	<!-- End Breadcrumb with link section -->

   <!-- js -->
    <script src="<?php echo THEME_PATH; ?>assets/dist/js/jquery-3.6.0.min.js"></script>
    <script src="<?php echo THEME_PATH; ?>assets/dist/js/bootstrap.bundle.js"></script>
	<script src="<?php echo THEME_PATH; ?>assets/dist/js/slick.min.js"></script>	
	<script src="<?php echo THEME_PATH; ?>assets/dist/js/wow.min.js"></script>
	<script src="<?php echo THEME_PATH; ?>assets/dist/js/main.js"></script>	
	<script type='text/javascript' id='cygnet-global-js-extra'>
	/* <![CDATA[ */
	//var ajaxPath = {"ajaxurl":"http:\/\/localhost\/cygnet\/wp-admin\/admin-ajax.php"};
	var templateUrl = '<?= site_url(); ?>'+'\/wp-admin\/admin-ajax.php';
	var ajaxPath = {"ajaxurl":templateUrl};
	/* ]]> */
	</script>
	<script src="<?php echo THEME_PATH; ?>assets/dist/js/scripts.js"></script>
    <!-- End js -->
	
	<script>
	document.addEventListener( 'wpcf7submit', function( event ) {
		var status = event.detail.status; 
		var res = event.detail.apiResponse.message; 
		if(event.detail.contactFormId == 40804 && status === 'aborted' && res == 'E004'){
			//jQuery('.wpcf7-response-output').html("Your user details are already available for R7VAT tool, <a href='https://r7vatgcccompliance.cygnettaxtech.com/login' target='_blank'>Click here</a> to login.");
			jQuery('.wpcf7-response-output').hide();
			jQuery('#err-cf7-40804').show();
		} else {
			jQuery('.wpcf7-response-output').show();
			jQuery('#err-cf7-40804').hide();
		}
	}, false );

	
	
	
	
	  var url = '<?php echo site_url(); ?>';
	  document.addEventListener('wpcf7mailsent', function(e) {
		if(e.detail.contactFormId == 172 || e.detail.contactFormId == 39050 || e.detail.contactFormId == 41345 || e.detail.contactFormId == 40804) {
			location = url + '/thank-you-for-contacting-us';
		} else if(e.detail.contactFormId == 41335) {
			location = url + '/thank-you-for-downloading';
		} else if(e.detail.contactFormId == 42061) {
			location = url + '/download-brochures-uk';
		} else if(e.detail.contactFormId == 43625 || e.detail.contactFormId == 43651) {
			location = url + '/thank-you-for-your-interest-in-muwafaq-support';
		} else if(e.detail.contactFormId == 40990){
			<?php if($post_slug == 'ksa-e-invoicing-phase-2'){ ?>
				location = url + '/thank-you-ksa-phase-2';
			<?php } else { ?>
				location = url + '/thank-you';
			<?php } ?>
		}
	  }, false);
		
		jQuery(document).ready(function(){
			CYGNET.init();
		// List of all the countries with their dialing code in json format
			var countryList = [{"name":"Afghanistan","dial_code":"+93","code":"AF"},{"name":"Albania","dial_code":"+355","code":"AL"},{"name":"Algeria","dial_code":"+213","code":"DZ"},{"name":"AmericanSamoa","dial_code":"+1 684","code":"AS"},{"name":"Andorra","dial_code":"+376","code":"AD"},{"name":"Angola","dial_code":"+244","code":"AO"},{"name":"Anguilla","dial_code":"+1 264","code":"AI"},{"name":"Antigua and Barbuda","dial_code":"+1268","code":"AG"},{"name":"Argentina","dial_code":"+54","code":"AR"},{"name":"Armenia","dial_code":"+374","code":"AM"},{"name":"Aruba","dial_code":"+297","code":"AW"},{"name":"Australia","dial_code":"+61","code":"AU"},{"name":"Austria","dial_code":"+43","code":"AT"},{"name":"Azerbaijan","dial_code":"+994","code":"AZ"},{"name":"Bahamas","dial_code":"+1 242","code":"BS"},{"name":"Bahrain","dial_code":"+973","code":"BH"},{"name":"Bangladesh","dial_code":"+880","code":"BD"},{"name":"Barbados","dial_code":"+1 246","code":"BB"},{"name":"Belarus","dial_code":"+375","code":"BY"},{"name":"Belgium","dial_code":"+32","code":"BE"},{"name":"Belize","dial_code":"+501","code":"BZ"},{"name":"Benin","dial_code":"+229","code":"BJ"},{"name":"Bermuda","dial_code":"+1 441","code":"BM"},{"name":"Bhutan","dial_code":"+975","code":"BT"},{"name":"Bosnia and Herzegovina","dial_code":"+387","code":"BA"},{"name":"Botswana","dial_code":"+267","code":"BW"},{"name":"Brazil","dial_code":"+55","code":"BR"},{"name":"British Indian Ocean Territory","dial_code":"+246","code":"IO"},{"name":"Bulgaria","dial_code":"+359","code":"BG"},{"name":"Burkina Faso","dial_code":"+226","code":"BF"},{"name":"Burundi","dial_code":"+257","code":"BI"},{"name":"Cambodia","dial_code":"+855","code":"KH"},{"name":"Cameroon","dial_code":"+237","code":"CM"},{"name":"Canada","dial_code":"+1","code":"CA"},{"name":"Cape Verde","dial_code":"+238","code":"CV"},{"name":"Cayman Islands","dial_code":"+ 345","code":"KY"},{"name":"Central African Republic","dial_code":"+236","code":"CF"},{"name":"Chad","dial_code":"+235","code":"TD"},{"name":"Chile","dial_code":"+56","code":"CL"},{"name":"China","dial_code":"+86","code":"CN"},{"name":"Christmas Island","dial_code":"+61","code":"CX"},{"name":"Colombia","dial_code":"+57","code":"CO"},{"name":"Comoros","dial_code":"+269","code":"KM"},{"name":"Congo","dial_code":"+242","code":"CG"},{"name":"Cook Islands","dial_code":"+682","code":"CK"},{"name":"Costa Rica","dial_code":"+506","code":"CR"},{"name":"Croatia","dial_code":"+385","code":"HR"},{"name":"Cuba","dial_code":"+53","code":"CU"},{"name":"Cyprus","dial_code":"+537","code":"CY"},{"name":"Czech Republic","dial_code":"+420","code":"CZ"},{"name":"Denmark","dial_code":"+45","code":"DK"},{"name":"Djibouti","dial_code":"+253","code":"DJ"},{"name":"Dominica","dial_code":"+1 767","code":"DM"},{"name":"Dominican Republic","dial_code":"+1 849","code":"DO"},{"name":"Ecuador","dial_code":"+593","code":"EC"},{"name":"Egypt","dial_code":"+20","code":"EG"},{"name":"El Salvador","dial_code":"+503","code":"SV"},{"name":"Equatorial Guinea","dial_code":"+240","code":"GQ"},{"name":"Eritrea","dial_code":"+291","code":"ER"},{"name":"Estonia","dial_code":"+372","code":"EE"},{"name":"Ethiopia","dial_code":"+251","code":"ET"},{"name":"Faroe Islands","dial_code":"+298","code":"FO"},{"name":"Fiji","dial_code":"+679","code":"FJ"},{"name":"Finland","dial_code":"+358","code":"FI"},{"name":"France","dial_code":"+33","code":"FR"},{"name":"French Guiana","dial_code":"+594","code":"GF"},{"name":"French Polynesia","dial_code":"+689","code":"PF"},{"name":"Gabon","dial_code":"+241","code":"GA"},{"name":"Gambia","dial_code":"+220","code":"GM"},{"name":"Georgia","dial_code":"+995","code":"GE"},{"name":"Germany","dial_code":"+49","code":"DE"},{"name":"Ghana","dial_code":"+233","code":"GH"},{"name":"Gibraltar","dial_code":"+350","code":"GI"},{"name":"Greece","dial_code":"+30","code":"GR"},{"name":"Greenland","dial_code":"+299","code":"GL"},{"name":"Grenada","dial_code":"+1 473","code":"GD"},{"name":"Guadeloupe","dial_code":"+590","code":"GP"},{"name":"Guam","dial_code":"+1 671","code":"GU"},{"name":"Guatemala","dial_code":"+502","code":"GT"},{"name":"Guinea","dial_code":"+224","code":"GN"},{"name":"Guinea-Bissau","dial_code":"+245","code":"GW"},{"name":"Guyana","dial_code":"+595","code":"GY"},{"name":"Haiti","dial_code":"+509","code":"HT"},{"name":"Honduras","dial_code":"+504","code":"HN"},{"name":"Hungary","dial_code":"+36","code":"HU"},{"name":"Iceland","dial_code":"+354","code":"IS"},{"name":"India","dial_code":"+91","code":"IN"},{"name":"Indonesia","dial_code":"+62","code":"ID"},{"name":"Iraq","dial_code":"+964","code":"IQ"},{"name":"Ireland","dial_code":"+353","code":"IE"},{"name":"Israel","dial_code":"+972","code":"IL"},{"name":"Italy","dial_code":"+39","code":"IT"},{"name":"Jamaica","dial_code":"+1 876","code":"JM"},{"name":"Japan","dial_code":"+81","code":"JP"},{"name":"Jordan","dial_code":"+962","code":"JO"},{"name":"Kazakhstan","dial_code":"+7 7","code":"KZ"},{"name":"Kenya","dial_code":"+254","code":"KE"},{"name":"Kiribati","dial_code":"+686","code":"KI"},{"name":"Kuwait","dial_code":"+965","code":"KW"},{"name":"Kyrgyzstan","dial_code":"+996","code":"KG"},{"name":"Latvia","dial_code":"+371","code":"LV"},{"name":"Lebanon","dial_code":"+961","code":"LB"},{"name":"Lesotho","dial_code":"+266","code":"LS"},{"name":"Liberia","dial_code":"+231","code":"LR"},{"name":"Liechtenstein","dial_code":"+423","code":"LI"},{"name":"Lithuania","dial_code":"+370","code":"LT"},{"name":"Luxembourg","dial_code":"+352","code":"LU"},{"name":"Madagascar","dial_code":"+261","code":"MG"},{"name":"Malawi","dial_code":"+265","code":"MW"},{"name":"Malaysia","dial_code":"+60","code":"MY"},{"name":"Maldives","dial_code":"+960","code":"MV"},{"name":"Mali","dial_code":"+223","code":"ML"},{"name":"Malta","dial_code":"+356","code":"MT"},{"name":"Marshall Islands","dial_code":"+692","code":"MH"},{"name":"Martinique","dial_code":"+596","code":"MQ"},{"name":"Mauritania","dial_code":"+222","code":"MR"},{"name":"Mauritius","dial_code":"+230","code":"MU"},{"name":"Mayotte","dial_code":"+262","code":"YT"},{"name":"Mexico","dial_code":"+52","code":"MX"},{"name":"Monaco","dial_code":"+377","code":"MC"},{"name":"Mongolia","dial_code":"+976","code":"MN"},{"name":"Montenegro","dial_code":"+382","code":"ME"},{"name":"Montserrat","dial_code":"+1664","code":"MS"},{"name":"Morocco","dial_code":"+212","code":"MA"},{"name":"Myanmar","dial_code":"+95","code":"MM"},{"name":"Namibia","dial_code":"+264","code":"NA"},{"name":"Nauru","dial_code":"+674","code":"NR"},{"name":"Nepal","dial_code":"+977","code":"NP"},{"name":"Netherlands","dial_code":"+31","code":"NL"},{"name":"Netherlands Antilles","dial_code":"+599","code":"AN"},{"name":"New Caledonia","dial_code":"+687","code":"NC"},{"name":"New Zealand","dial_code":"+64","code":"NZ"},{"name":"Nicaragua","dial_code":"+505","code":"NI"},{"name":"Niger","dial_code":"+227","code":"NE"},{"name":"Nigeria","dial_code":"+234","code":"NG"},{"name":"Niue","dial_code":"+683","code":"NU"},{"name":"Norfolk Island","dial_code":"+672","code":"NF"},{"name":"Northern Mariana Islands","dial_code":"+1 670","code":"MP"},{"name":"Norway","dial_code":"+47","code":"NO"},{"name":"Oman","dial_code":"+968","code":"OM"},{"name":"Pakistan","dial_code":"+92","code":"PK"},{"name":"Palau","dial_code":"+680","code":"PW"},{"name":"Panama","dial_code":"+507","code":"PA"},{"name":"Papua New Guinea","dial_code":"+675","code":"PG"},{"name":"Paraguay","dial_code":"+595","code":"PY"},{"name":"Peru","dial_code":"+51","code":"PE"},{"name":"Philippines","dial_code":"+63","code":"PH"},{"name":"Poland","dial_code":"+48","code":"PL"},{"name":"Portugal","dial_code":"+351","code":"PT"},{"name":"Puerto Rico","dial_code":"+1 939","code":"PR"},{"name":"Qatar","dial_code":"+974","code":"QA"},{"name":"Romania","dial_code":"+40","code":"RO"},{"name":"Rwanda","dial_code":"+250","code":"RW"},{"name":"Samoa","dial_code":"+685","code":"WS"},{"name":"San Marino","dial_code":"+378","code":"SM"},{"name":"Saudi Arabia","dial_code":"+966","code":"SA"},{"name":"Senegal","dial_code":"+221","code":"SN"},{"name":"Serbia","dial_code":"+381","code":"RS"},{"name":"Seychelles","dial_code":"+248","code":"SC"},{"name":"Sierra Leone","dial_code":"+232","code":"SL"},{"name":"Singapore","dial_code":"+65","code":"SG"},{"name":"Slovakia","dial_code":"+421","code":"SK"},{"name":"Slovenia","dial_code":"+386","code":"SI"},{"name":"Solomon Islands","dial_code":"+677","code":"SB"},{"name":"South Africa","dial_code":"+27","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","dial_code":"+500","code":"GS"},{"name":"Spain","dial_code":"+34","code":"ES"},{"name":"Sri Lanka","dial_code":"+94","code":"LK"},{"name":"Sudan","dial_code":"+249","code":"SD"},{"name":"Suriname","dial_code":"+597","code":"SR"},{"name":"Swaziland","dial_code":"+268","code":"SZ"},{"name":"Sweden","dial_code":"+46","code":"SE"},{"name":"Switzerland","dial_code":"+41","code":"CH"},{"name":"Tajikistan","dial_code":"+992","code":"TJ"},{"name":"Thailand","dial_code":"+66","code":"TH"},{"name":"Togo","dial_code":"+228","code":"TG"},{"name":"Tokelau","dial_code":"+690","code":"TK"},{"name":"Tonga","dial_code":"+676","code":"TO"},{"name":"Trinidad and Tobago","dial_code":"+1 868","code":"TT"},{"name":"Tunisia","dial_code":"+216","code":"TN"},{"name":"Turkey","dial_code":"+90","code":"TR"},{"name":"Turkmenistan","dial_code":"+993","code":"TM"},{"name":"Turks and Caicos Islands","dial_code":"+1 649","code":"TC"},{"name":"Tuvalu","dial_code":"+688","code":"TV"},{"name":"Uganda","dial_code":"+256","code":"UG"},{"name":"Ukraine","dial_code":"+380","code":"UA"},{"name":"United Arab Emirates","dial_code":"+971","code":"AE"},{"name":"United Kingdom","dial_code":"+44","code":"GB"},{"name":"United States","dial_code":"+1","code":"US"},{"name":"Uruguay","dial_code":"+598","code":"UY"},{"name":"Uzbekistan","dial_code":"+998","code":"UZ"},{"name":"Vanuatu","dial_code":"+678","code":"VU"},{"name":"Wallis and Futuna","dial_code":"+681","code":"WF"},{"name":"Yemen","dial_code":"+967","code":"YE"},{"name":"Zambia","dial_code":"+260","code":"ZM"},{"name":"Zimbabwe","dial_code":"+263","code":"ZW"},{"name":"land Islands","dial_code":"","code":"AX"},{"name":"Antarctica","dial_code":null,"code":"AQ"},{"name":"Bolivia, Plurinational State of","dial_code":"+591","code":"BO"},{"name":"Brunei Darussalam","dial_code":"+673","code":"BN"},{"name":"Cocos (Keeling) Islands","dial_code":"+61","code":"CC"},{"name":"Congo, The Democratic Republic of the","dial_code":"+243","code":"CD"},{"name":"Cote d'Ivoire","dial_code":"+225","code":"CI"},{"name":"Falkland Islands (Malvinas)","dial_code":"+500","code":"FK"},{"name":"Guernsey","dial_code":"+44","code":"GG"},{"name":"Holy See (Vatican City State)","dial_code":"+379","code":"VA"},{"name":"Hong Kong","dial_code":"+852","code":"HK"},{"name":"Iran, Islamic Republic of","dial_code":"+98","code":"IR"},{"name":"Isle of Man","dial_code":"+44","code":"IM"},{"name":"Jersey","dial_code":"+44","code":"JE"},{"name":"Korea, Democratic People's Republic of","dial_code":"+850","code":"KP"},{"name":"Korea, Republic of","dial_code":"+82","code":"KR"},{"name":"Lao People's Democratic Republic","dial_code":"+856","code":"LA"},{"name":"Libyan Arab Jamahiriya","dial_code":"+218","code":"LY"},{"name":"Macao","dial_code":"+853","code":"MO"},{"name":"Macedonia, The Former Yugoslav Republic of","dial_code":"+389","code":"MK"},{"name":"Micronesia, Federated States of","dial_code":"+691","code":"FM"},{"name":"Moldova, Republic of","dial_code":"+373","code":"MD"},{"name":"Mozambique","dial_code":"+258","code":"MZ"},{"name":"Palestinian Territory, Occupied","dial_code":"+970","code":"PS"},{"name":"Pitcairn","dial_code":"+872","code":"PN"},{"name":"Réunion","dial_code":"+262","code":"RE"},{"name":"Russia","dial_code":"+7","code":"RU"},{"name":"Saint Barthélemy","dial_code":"+590","code":"BL"},{"name":"Saint Helena, Ascension and Tristan Da Cunha","dial_code":"+290","code":"SH"},{"name":"Saint Kitts and Nevis","dial_code":"+1 869","code":"KN"},{"name":"Saint Lucia","dial_code":"+1 758","code":"LC"},{"name":"Saint Martin","dial_code":"+590","code":"MF"},{"name":"Saint Pierre and Miquelon","dial_code":"+508","code":"PM"},{"name":"Saint Vincent and the Grenadines","dial_code":"+1 784","code":"VC"},{"name":"Sao Tome and Principe","dial_code":"+239","code":"ST"},{"name":"Somalia","dial_code":"+252","code":"SO"},{"name":"Svalbard and Jan Mayen","dial_code":"+47","code":"SJ"},{"name":"Syrian Arab Republic","dial_code":"+963","code":"SY"},{"name":"Taiwan, Province of China","dial_code":"+886","code":"TW"},{"name":"Tanzania, United Republic of","dial_code":"+255","code":"TZ"},{"name":"Timor-Leste","dial_code":"+670","code":"TL"},{"name":"Venezuela, Bolivarian Republic of","dial_code":"+58","code":"VE"},{"name":"Viet Nam","dial_code":"+84","code":"VN"},{"name":"Virgin Islands, British","dial_code":"+1 284","code":"VG"},{"name":"Virgin Islands, U.S.","dial_code":"+1 340","code":"VI"}];

			jQuery('.allCountryList').change(function() {
				selectedCountry = jQuery(this).val();
				jQuery.each(countryList,function(idx, obj) {
					if(selectedCountry == obj.name){
						CountryNumberCode = obj.dial_code;
						//console.log(CountryNumberCode);
						jQuery('#country-code').val(CountryNumberCode);
					}
				});
			});

		});
		
		/* Top Tab Onclick event for active class */
		jQuery(".top-tab-main-section div a").click(function() {  
			jQuery('.top-tab-main-section div').removeClass('tab-active');
			jQuery(this).parent().addClass("tab-active");
		});
		
		/*function top_tab_click(varid){
			jQuery('.top-tab-main-section a').removeClass('tab-active');
			jQuery('#top_tab_'+varid).addClass('tab-active');
		}*/
		
		/* jquery for home page form */
		jQuery(document).ready(function(){
			jQuery("#customize > span:first-child input").click(function() { 
				var checkbox_val = jQuery("input[type=checkbox][name=customize]:checked").val();				
				jQuery('html, body').animate({
					scrollTop: jQuery("#taxtech-home-form").offset().top-100
				  }, 800);
			});			
			jQuery("#customize > span:last-child input").click(function() { 
				var checkbox_val = jQuery("input[type=checkbox][name=customize]:checked").val();
				jQuery('html, body').animate({
					scrollTop: jQuery("#taxtech-terms-cond").offset().top-100
				  }, 800);
			});
		});
		/* end jquery for home page form */
		
	</script>
	
	
	<!-- Download functinality -->
	<style>		
		.otp-input{
			display: flex;
			flex-wrap: wrap;
		}
		.otp-input > button{
			width: 100%;
		}
		.otp-input input[type=number]::-webkit-inner-spin-button, 
		.otp-input input[type=number]::-webkit-outer-spin-button { 
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			margin: 0; 
		}
		.resend{
			font-size:14px;
		}
		.text-center{
			text-align:center;
		}
		.ui-widget-content a{
		 color: #3f77f5 !important;
		}
		#verify_email_send{
			background-color: #002a54;
			color: #fff;
			padding: 5px 10px;
			display: flex;
			font-size: 14px;
			align-items: center;	
			margin-left:auto;					
		}
		#verify_email_send:hover{
			opacity:0.8;
			text-decoration:none
		}
		#verify_email_send[disabled=disabled]{
			background-color: #cfcfcf;
			color: #918c8c;
			border-color:#cfcfcf;				
		}
		#billing_email_field{
			display:flex;
			flex-wrap:wrap;	
			position:relative;
		}
		#billing_email_field .woocommerce-input-wrapper{
			width: calc(100% - 68px);
		}
		#billing_email_field i{
			display:none;
			color: #409d11;
			position: absolute;
			top: 47px;
			right: 77px;
			font-size: 18px;
		}
		#billing_email_field input{
			padding-right:28px;
		}
		.note{
			font-size:13px;
			color:#9d9d9d;
			margin-top:5px;
			display:inline-block;
		}
		.download-otp-form{
			display:none;
		}
	</style>
	
	<div class="modal fade" id="dialog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog modal-lg">
		<div class="modal-content">
		  <div class="modal-header">
			<h5 class="modal-title" id="exampleModalLabel">Download full report</h5>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		  </div>
		  <div class="modal-body">
			<?php echo do_shortcode("[contact-form-7 id='26304' title='Download form']"); ?>
		  </div>
		</div>
	  </div>
	</div>
	
	<script>
	jQuery( window ).on("load", function() {
		jQuery('#verify_otp').attr("disabled", "disabled");
		localStorage.removeItem('OTP-value');
	});
	
	jQuery(document).ready(function(){	
		setTimeout(function(){
		   jQuery('#billing_email').attr('readonly', false);
		   jQuery('#verify_email_send').removeAttr("disabled");
		   jQuery('#verify_otp').attr("disabled", "disabled");
		   jQuery('.otp-email-msg').show();
			localStorage.removeItem('OTP-value');
		}, 1000);
	   
		var templateUrl = '<?= site_url(); ?>'+'\/wp-admin\/admin-ajax.php';
		var ajaxPath = {"ajaxurl":templateUrl};
		
		jQuery("#download_zip_file").click(function(){
			jQuery('#billing_email').attr('readonly', false);
		    jQuery('#verify_email_send').removeAttr("disabled");
			jQuery('#verify_otp').attr("disabled", "disabled");
			jQuery('.otp-email-msg').show();
			jQuery('.download-otp-form').hide();
		});
		
		jQuery("#verify_email_send").click(function(){
			jQuery('#billing_email').css('border-color', '#0C3761');
			if(jQuery('#billing_email').val() != ''){
				jQuery.ajax({
					url: ajaxPath.ajaxurl,
					type: "POST",
					data: {
						'action': 'get_verify_email_data',
						'email_val': jQuery('#billing_email').val()
					},
					success: function (response) {
						localStorage.setItem('OTP-value',response);
						jQuery('.download-otp-form').show();
						jQuery('.otp-email-msg').show();
						jQuery('#verify_otp').removeAttr("disabled");
						return false;
					}
				});							
			} else {
				jQuery('#billing_email').css('border-color', '#d65d67');
				return false;
			}
		});
		
		/* Click on re-send click */
		jQuery("#resend_otp").click(function(){
			jQuery('#billing_email').css('border-color', '#0C3761');
			jQuery('.resend-success-msg').hide();
			if(jQuery('#billing_email').val() != ''){							
				jQuery.ajax({
					url: ajaxPath.ajaxurl,
					type: "POST",
					data: {
						'action': 'get_verify_email_data',
						'email_val': jQuery('#billing_email').val()
					},
					success: function (response) {
						localStorage.setItem('OTP-value',response);	
						jQuery('.resend-success-msg').show();
						jQuery('.otp-email-msg').hide();
						jQuery('#verify_otp').removeAttr("disabled");
						return false;
					}
				});							
			} else {
				jQuery('#billing_email').css('border-color', '#d65d67');
				return false;
			}
		});
		
		/* Click on submit button */
		jQuery("#verify_otp").click(function(){
			if(jQuery('#otp_num').val() != ''){
				var get_otp = localStorage.getItem('OTP-value');
				var final_val = jQuery('#otp_num').val()+0;
				if(final_val == get_otp){					
					jQuery('#otp_num').css('border-color', '#0C3761');
					jQuery('#billing_email').attr('readonly', true);
					jQuery('#verify_email_send').attr("disabled", "disabled");
					return true;
				} else {
					jQuery('#otp_num').css('border-color', '#d65d67');
					return false;
				}
			} else {
				jQuery('#otp_num').css('border-color', '#d65d67');
				return false;
			}
			return false;
		});
		
	});
	
	document.addEventListener('wpcf7mailsent', function(e) {
		if(e.detail.contactFormId == 26304) {
			if(jQuery('#otp_num').val() != ''){
				var get_otp = localStorage.getItem('OTP-value');
				var final_val = jQuery('#otp_num').val()+0;
				if(final_val == get_otp){					
					jQuery('#otp_num').css('border-color', '#0C3761');
					localStorage.removeItem('OTP-value');
					jQuery('#billing_email').attr('readonly', true);
					jQuery('#verify_email_send').attr("disabled", "disabled");
					jQuery('.download-otp-form').hide();
					jQuery('#billing_email').val('');
					jQuery('.wpcf7-response-output').hide();
					jQuery('#otp_num').val('');	
					var tab = window.open('<?php echo THEME_PATH; ?>/images/Vendor_Complaince_sample_report.pdf', '_blank');
					tab.focus();
					jQuery("#dialog").modal('hide');					
				} else {
					jQuery('#otp_num').css('border-color', '#d65d67');
					return false;
				}
			} else {
				jQuery('#otp_num').css('border-color', '#d65d67');
				return false;
			}
			return false;
		}
	  }, false);
	  document.addEventListener('wpcf7mailsent', function(e) {
		if(e.detail.contactFormId == 41143){
			var tab = window.open('<?php echo THEME_PATH; ?>/images/fintech-event-brochure-digital.pdf', '_blank');
			tab.focus();
		} else if (e.detail.contactFormId == 41149){
			var tab = window.open('<?php echo THEME_PATH; ?>/images/cygnet-capabilities-brochure.pdf', '_blank');
			tab.focus();
		} else if (e.detail.contactFormId == 41696){
			var tab = window.open('<?php echo site_url(); ?>/ITC', '_blank');
			tab.focus();
		}
	  }, false);
	</script>
	<!-- End download functinality -->

<!-- Event page download popup functinality -->
<script>
	jQuery(document).ready(function(){
		jQuery('.event-doc-cls a').click(function(e) {
		  var txt = jQuery(e.target).text();
		  jQuery('#event_doc_title').val(txt);
		  var urlval = jQuery(this).data("value");
		  jQuery('#event_doc_url').val(urlval);
		});
		
		document.addEventListener('wpcf7mailsent', function(e) {
			if(e.detail.contactFormId == 42169){
				var openurlval = jQuery('#event_doc_url').val();
				var tab = window.open(openurlval, '_blank');
				tab.focus();
				location = url + '/thank-you-for-downloading';
			}
		 }, false);
	});
</script>
<div class="modal fade video-modal " id="event-doc-modal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg vat-solution-download-modal">
    <div class="modal-content contact-form py-0"> 
		<div class="modal-header">
			<h5 class="modal-title" id="popupdownloadModalLabel">Fill in the form to download</h5>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal-body form-content">
			<?php echo do_shortcode('[contact-form-7 id="42169" title="Events Doc Popup Form"]');  ?>
		</div>
    </div>
  </div>
</div>

<?php wp_footer(); ?>

</body>
</html>