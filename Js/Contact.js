/**
 * Portfolio
 * Contact.js
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
export default class Contact {
  /**
   * @constructor
   * @param {page} page - the current page
   */
  constructor( page ){
    // @private {page} page - the current page
    this.page = page;

    var self = this;
     // On load animation when the page is fully loaded
    page.isLoaded.addListener( function( ){
      // make the thing responsve
      self.animateInitial();
    }) 
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
            duration: 900,
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
            duration: 900,
            delay: 50,
          })
          // only once
          $( ".animate-left" ).eq( i ).off( "inview" );
        } 
      } )
    } ) 

  }

}
    


// // strict mode
// "use strict";

// // class that handles the header animations
// export default class Contact {
//   /**
//    * @constructor
//    * @param {page} page - the current page
//    */
//   constructor( page ){
//     // @private {page} page - the current page
//     this.page = page;

//     var self = this;
//      // On load animation when the page is fully loaded
//     page.isLoaded.addListener( function( ){
//       // make the thing responsve
//       self.animateInitial();
//     }) 
    
//     $( "textarea" )[ 0 ].oninput = function() {
//       $( "textarea" )[ 0 ].style.height = 190 + "px";
//       var newHeight = $( "textarea" )[ 0 ].scrollHeight + "px";
//       $( "textarea" )[ 0 ].style.height = newHeight;
//     } 

//     $( "#send" ).click( () => {
//       var name =  $( "#c_name" )[ 0 ].value;
//       var email =  $( "#c_email" )[ 0 ].value;
//       var number =  $( "#c_number" )[ 0 ].value;
//       var subject =  $( "#c_subject" )[ 0 ].value;
//       var message =  $( "#c_message" )[ 0 ].value;
//       // if they aren't valid, don't send anything
//       if ( !self.validateParams( name, email, number, subject, message ) ){
//         return;
//       }
//       var emailParams = {
//         "access_token": "mqcumrh9rkdksqvtxk4hwx8a"
//       };
//       var request = new XMLHttpRequest();
//       request.onreadystatechange = function() {
//         if (  request.readyState == 4 && request.status == 200  ) {
//           self.addFinalMessage( 
//             "Your message has been sent! I will get back to you asap." 
//           );
//         } else
//         if ( request.readyState == 4 ) {
//           self.addFinalMessage( 
//             "something went wrong. Please try again later" 
//           );
//         }
//       };

//       emailParams[ "subject" ] = subject;
//       emailParams[ "text" ] = message;
//       emailParams[ "reply_to" ] = email;
//       emailParams[ "extra_number" ] = number;
//       emailParams[ "extra_name" ] = name;
//       emailParams[ "extra_email" ] = email;
//       // change to http params
//       var formData = [];
//       for ( var key in emailParams ) {
//         formData.push(
//           encodeURIComponent( key ) 
//           + "=" 
//           + encodeURIComponent( emailParams[key] )
//         );
//       }
//       var params = formData.join( "&" );
//       // make an http-req
//       request.open( "POST", "https://postmail.invotes.com/send", true );
//       request.setRequestHeader(
//         "Content-type", 
//         "application/x-www-form-urlencoded"
//       );
//       request.send( params );
//       return false;
//     } );
//   }
//     /**
//    * @public
//    * Validate the responses
//    * @param {string} name - the name
//    * @param {string} email - the email
//    * @param {string} number - the number
//    * @param {string} subject - the subject
//    * @param {string} message - the message
//    * @return {bool} if the params are valid
//    */
//   validateParams( name, email, number, subject, message ) {
//     if ( !name || !email || !subject || !message ) {
//       this.addError( "Please Fill All Required Fields" );
//       return false;
//     }
//     // validate the email
//     var validation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if ( !validation.test( email ) ){
//       this.addError( "Your Email is not valid" );
//       return false;
//     }
//     // check for recaptcha
//     if ( !grecaptcha.getResponse() ) {
//       this.addError( "Please Validate with recaptcha" )
//       return false;
//     }
//     return true;
//   } 


//   /**
//    * @public
//    * add the error message
//    * @param {string} error - the message
//    */
//   addError( error ) {
//     $( "#error" ).text( error )
//     $( "#error" ).css( "display", "flex" );  
//     $('html,body').animate({
//        scrollTop: $("#contact").offset().top
//     });
//     $( "#success" ).css( "display", "none" );  
//   }

//   /**
//    * @public
//    * add the finnal message
//    * @param {string} msg - the message
//    */
//   addFinalMessage( msg ) {
//     $( "#success" ).text( msg )
//     $( "#success" ).css( "display", "flex" );  
//     $( "#error" ).css( "display", "none" ); 
//   }
//   /**
//    * @private
//    * Animate the initial animations
//    */
//   animateInitial() {
//     grecaptcha.render( $( ".recaptcha" )[ 0 ], {
//       "sitekey": "6LceraEUAAAAAH94RkLXJAAYaBirxXDiAXUKcmRS ",
//     } ); 

//   }

// }
    
