<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Benevolent
 */
	$enabled_sections = benevolent_get_sections();
    if( is_home() || ! $enabled_sections || !( is_front_page() || is_page_template( 'template-home.php' ) ) ) echo '</div></div></div>' ; //<!-- .row --><!-- #content --><!-- .container -->

?>            
	<footer id="colophon" class="site-footer" role="contentinfo">
	
		
        <?php if( is_page_template( 'template-home.php' ) ) do_action( 'benevolent_promotional' ); ?>
		
        
		
        <?php if( is_active_sidebar( 'footer-one' ) || is_active_sidebar( 'footer-two' ) || is_active_sidebar( 'footer-three' ) || is_active_sidebar( 'footer-four' ) ){ ?>
        <div class="container">
			<div class="footer-t">
				<div class="row">
					
					<div class = "column">
						<?php if( is_active_sidebar( 'footer-one') ) dynamic_sidebar( 'footer-one' ); ?>
					</div>
					<div class = "column">
						<?php if( is_active_sidebar( 'footer-two') ) dynamic_sidebar( 'footer-two' ); ?>
					</div>
					<div class = "column">
						<?php if( is_active_sidebar( 'footer-three') ) dynamic_sidebar( 'footer-three' ); ?>
					</div>
					<div class = "column">
						<?php if( is_active_sidebar( 'footer-four' ) ) dynamic_sidebar( 'footer-four' ); ?>
					</div>
                    
				</div>
			</div>
		</div>
			<!-- Begin MailChimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
	/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://friendslsp.us18.list-manage.com/subscribe/post?u=f750bd55cd4cf3761a32db78c&amp;id=5e57947361" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<label for="mce-EMAIL">Subscribe to our Newsletter</label>
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_f750bd55cd4cf3761a32db78c_5e57947361" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>

<!--End mc_embed_signup-->	
		
        <?php } 
            
            do_action( 'benevolent_footer' );
       
        ?>
		
		
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
