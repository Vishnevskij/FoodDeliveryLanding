
import './App.css';
import styles from "../src/Styles.module.css";
import React from 'react';

function App() {
  return (
    <div class={styles.wrapper}>

<header class={styles.header}>
                 <div class={styles.headerLogo}>
                     <img src='logo.png' alt=""></img>
                 </div>
  <div class={styles.headerNav}>
    <a href='/' class={styles.orange}>Home</a>
    <a href='/'>Product</a>
    <a href='/'>Faq</a>
    <a href='/'>Contact</a>
  </div>

</header>

<div class={styles.articleOne}>
             <div class={styles.mainText}>   
                   <span class={styles.smallHeader}>Food app</span>
                       <span class={styles.centralText}>Why stay hungry when </span> 
                       <span class={styles.bottomText}>you can order form Bella Onojie</span>
                       <span class={styles.smallBottomText}>Download the bella onoje’s food app now on</span>
                  
                   </div>

                   <div class={styles.buttonsSection}>
                    <button class={styles.topButtonLeft}>PlayStore</button>
                    <button class={styles.topButtonRight}>App store</button>
                   </div>

                   
                       <div class={styles.twoPhones}> </div>

                       <div class={styles.hr}></div>
                   
                   <span class={styles.h4}>How the app works</span>


                   
</div>

<div class={styles.loginSection}>
                    <div class={styles.loginSectionLeft}>
                      <img src='Rectangle1.png' alt=""></img>
                    </div>
                                  <div class={styles.loginSectionRight}>
                                           <div class={styles.sectionText}>
                                     <span class={styles.orangeTextSection}>Create an account</span>
                                     <span class={styles.centralTextSection}>Create/login to an existing account to get started</span>
                                     <span class={styles.bottomTextSection}>An account is created with your email and a desired password</span>
                                          </div>
                                  </div>
  </div>

  <div class={styles.loginSectionTwo}>
  <div class={styles.loginSectionRight}>
                                           <div class={styles.sectionText}>
                                     <span class={styles.orangeTextSection}>Explore varieties</span>
                                     <span class={styles.centralTextSection}>Shop for your favorites meal as e dey hot.</span>
                                     <span class={styles.bottomTextSection}>Shop for your favorite meals or drinks and enjoy while doing it.</span>
                                          </div>
                                  </div>
    <div class={styles.loginSectionLeft}>
                      <img src='Rectangle2.png' alt=""></img>
                    </div>
  </div>

  <div class={styles.loginSectionThree}>
                    <div class={styles.loginSectionLeft}>
                      <img src='Rectangle.png' alt=""></img>
                    </div>
                                  <div class={styles.loginSectionRight}>
                                           <div class={styles.sectionText}>
                                     <span class={styles.orangeTextSection}>Checkout</span>
                                     <span class={styles.centralTextSection}>When you done check out and get it delivered.</span>
                                     <span class={styles.bottomTextSection}>When you done check out and get it delivered with ease.</span>
                                          </div>
                                  </div>
                   </div>

<div class={styles.downloadSection}>
  <span class={styles.downTextOne}>Download the app now.</span>
  <span class={styles.downTextTwo}>Available on your favorite store. Start your premium experience now</span>
  <div class={styles.bottomButtonsSection}>
    <button class={styles.botBtnL}>Playstore</button>
    <button class={styles.botBtnR}>App store</button>
  </div>
</div>

<footer class={styles.footer}>
               <div class={styles.footerLogo}>
                   
               </div>

               <div class={styles.socialSection}><div class={styles.insta}></div></div>
               <span class={styles.footerText}>Copywright 2020 Bella Onojie.com</span>
</footer>

</div>
  );
}

export default App;
