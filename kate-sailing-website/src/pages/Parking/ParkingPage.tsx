import React from 'react';
import {
  FaCarSide,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaPhone,
  FaShuttleVan,
  FaWalking,
} from 'react-icons/fa';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container } from 'styles/shared';
import siteConfig from 'siteConfig.json';

const PARKING_MAP_IMAGE = `${process.env.PUBLIC_URL}/static/map.jpg`;
const SMARTDART_URL = 'https://capecodrta.org/schedules-services/smartdart/';

const ParkingPage: React.FC = () => (
  <>
    <Header />
    <main>
      <section className="sail-page-hero">
        <Container>
          <div className="sail-2col-hero">
            <div className="sail-hero-narrow">
              <h1 className="sail-page-title">Parking</h1>
              <p className="sail-lead">
                Unfortunately, we are no longer able to offer onsite parking.
                Please see our map with parking suggestions.
              </p>

              <div className="sail-surface sail-surface--clip">
                <a
                  className="sail-link-rail"
                  href={siteConfig.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sail-pip sail-pip--navy">
                    <FaMapMarkerAlt />
                  </span>
                  <span className="sail-labeled">
                    <span className="sail-label-eyebrow">Departure Address</span>
                    <span>
                      {siteConfig.contact.addressLine1} {siteConfig.contact.addressLine2}
                    </span>
                  </span>
                  <span className="sail-chevron" aria-hidden>
                    →
                  </span>
                </a>

                <div className="sail-warn-row">
                  <span className="sail-pip sail-pip--warn">
                    <FaExclamationTriangle />
                  </span>
                  <p>
                    Please do <strong>NOT</strong> park at the Clam Shack
                    without permission.
                  </p>
                </div>
              </div>
            </div>

            <figure className="sail-padded-map">
              <img
                src={PARKING_MAP_IMAGE}
                alt="Illustrated parking map for Schooner Liberte in Falmouth"
              />
            </figure>
          </div>

          <div className="sail-tips-2x2">
            <article className="sail-surface sail-surface--tip">
              <div className="sail-tip-head">
                <div className="sail-pip sail-pip--navy sail-pip--lg" aria-hidden>
                  <FaCarSide />
                </div>
                <h3>Parking Options</h3>
              </div>
              <p>
                The most plentiful option is the 4 hour parking in the Marine
                Park. Please observe signs. There is street parking available
                right outside the Clam Shack but these spaces fill quickly so we
                suggest arriving early in case they are not available.
              </p>
            </article>

            <article className="sail-surface sail-surface--tip">
              <div className="sail-tip-head">
                <div className="sail-pip sail-pip--navy sail-pip--lg" aria-hidden>
                  <FaMapMarkerAlt />
                </div>
                <h3>Drop-Off Recommended</h3>
              </div>
              <p>
                We encourage drivers to drop off their passenger before looking
                for parking, especially if traveling with children or guests
                with limited mobility. If you are walking, we are happy to stow
                foldable strollers onboard for you.
              </p>
            </article>

            <article className="sail-surface sail-surface--tip">
              <div className="sail-tip-head">
                <div className="sail-pip sail-pip--navy sail-pip--lg" aria-hidden>
                  <FaShuttleVan />
                </div>
                <h3>Ride Share &amp; Shuttle</h3>
              </div>
              <p>
                We also encourage passengers to use ride share services such as
                Uber or the Cape Cod RTA SmartDart shuttle service. More
                information on SmartDart is available{' '}
                <a href={SMARTDART_URL} target="_blank" rel="noopener noreferrer">
                  here
                </a>
                .
              </p>
            </article>

            <article className="sail-surface sail-surface--tip">
              <div className="sail-tip-head">
                <div className="sail-pip sail-pip--navy sail-pip--lg" aria-hidden>
                  <FaWalking />
                </div>
                <h3>Walking Time</h3>
              </div>
              <p>
                If driving expect most passengers will need to walk 5-10 minutes
                to a parking space. If you are unable to walk 5-10 minutes,
                please arrange a ride share service or call us 24 hours in
                advance.
              </p>
            </article>
          </div>

          <div className="sail-surface sail-call-bar">
            <FaPhone />
            <span>
              Questions before your sail? Call{' '}
              <a
                className="sail-link-gold"
                href={`tel:${siteConfig.contact.phoneTel}`}
              >
                {siteConfig.contact.phone}
              </a>
              .
            </span>
          </div>
        </Container>
      </section>
    </main>
    <Footer />
  </>
);

export default ParkingPage;
