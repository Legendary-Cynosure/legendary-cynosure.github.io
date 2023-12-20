/**
 * Portfolio
 * Education.js
 *
 * @author Alexander Le <physicist86.5@gmail.com> 
 * Created on 12/7/21
 * Copyright © 2021 Alexander Le. All rights reserved.
 *
 * ## Description:
 *
 * This handles the Education interactivity and setup so that all animations
 * happen after the animation is finished.
 *
 *  
 */

// strict mode
"use strict";

// class that handles the header animations
export default class Projects {
  /**
   * @constructor
   * @param {page} page - the current page
   */
  constructor( page ){
    // @private {page} page - the current page
    this.page = page;

    var self = this;
    // $(".grid").imagesLoaded(function() {
    // $(".grid").masonry({
    //   itemSelector: ".grid-item"
    // });
  // });
     // On load animation when the page is fully loaded
    // page.isLoaded.addListener( function( ){
    //   // make the thing responsve
    //   self.animateInitial();
    // })
  }
  /**
   * @private
   * Animate the initial animations
   */
  animateInitial() {
    $( ".animate-right" ).each( ( i ) => {
      $( ".animate-right" ).eq( i ).on( "inview" , ( _, isInView ) => {
        if ( isInView ) {
          anime({
            targets: $( ".animate-right" )[ i ],
            translateX: [ -100, 0 ],
            easing: "easeOutExpo",
            opacity: 1,
            duration: 800,
            delay: 50,
          })
          // only once
          $( ".animate-right" ).eq( i ).off( "inview" );
        } 
      } )
    } )   
     $( ".animate-left" ).each( ( i ) => {
      $( ".animate-left" ).eq( i ).on( "inview" , ( _, isInView ) => {
        if ( isInView ) {
          anime({
            targets: $( ".animate-left" )[ i ],
            translateX: [ 100, 0 ],
            easing: "easeOutExpo",
            opacity: 1,
            duration: 800,
            delay: 50,
          })
          // only once
          $( ".animate-left" ).eq( i ).off( "inview" );
        } 
      } )
    } ) 

  }

}
    
