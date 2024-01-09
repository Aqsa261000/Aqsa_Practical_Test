import React from 'react';
import { DefaultLayout } from '../../layout';
import './confirmation.css';
import { GradientTextSection } from '../../common';

const ConfirmationDefault = () => {
  return (
    <>
      <DefaultLayout>
        <div className="confirmation-container">
          <GradientTextSection>
            <div class="heading center">
              <div class="heading-content">We’ll be in touch.</div>
              <div class="subheading">
                You are <span class="spanContent">officially</span> on the list
                and we will be in touch soon!
                <br />
                In the <span class="spanContent">meantime</span>, you can{' '}
                <span class="spanContent">follow our social accounts</span>.
              </div>
            </div>
          </GradientTextSection>
        </div>
      </DefaultLayout>
    </>
  );
};

export default ConfirmationDefault;
