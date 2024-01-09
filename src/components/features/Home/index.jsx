import React from 'react';
import { DefaultLayout } from '../../layout';
import './home.css';
import Header from './Header';
import { GradientTextSection, SearchBar } from '../../common';
const HomeDefault = () => {
  return (
    <>
      {/* <DefaultLayout>
        <div className="home-container center">
          <Header />
          <div className="section-container center">
            <GradientTextSection>
              <div class="heading center">
                <div class="heading-content">
                  Join the private <br />
                  exclusive access
                </div>
                
                  <SearchBar>
                    <div className="input-field">example@example.com</div>
                    <div className="search-button-container">
                      <div className="search-button">Subscribe</div>
                    </div>
                  </SearchBar>
                
              </div>
            </GradientTextSection>
          </div>
        </div>
      </DefaultLayout> */}

      <DefaultLayout>
        <Header />
        {/* <GradientTextSection>
          <div className="section-container center">
            <div className="heading center">
            <div className="heading-content">
              <div className="content">Hello World</div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SearchBar>
                <div className="input-field">example@example.com</div>
                <div className="search-button-container">
                  <div className="search-button">Subscribe</div>
                </div>
              </SearchBar>
            </div>
            </div>
          </div>
        </GradientTextSection> */}
        <GradientTextSection>
          <div style={{ height: '1000px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                flexDirection: 'column',
              }}
            >
              <div className="main-heading">Join the private <br />exclusive access</div>
              <SearchBar>
                <div className="input-field">example@example.com</div>
                <div className="search-button-container">
                  <div className="search-button">Subscribe</div>
                </div>
              </SearchBar>
            </div>
          </div>
        </GradientTextSection>
      </DefaultLayout>
    </>
  );
};

export default HomeDefault;
