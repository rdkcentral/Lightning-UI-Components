import Artwork from '../pageObjects/foundations/artwork.foundations';
import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
  /**
   * @module Artwork
   * @function I verify the {String} is {String} for Artwork component
   * @description Cucumber statement to verify the settings of Artwork component
   * @param {String} control
   * @param {String} value
   * @example Then I verify the 'blur' is 'true' for Artwork component
   */
   Then(
    'I verify the {string} is {string} for Artwork component',
    (control, value) => {
      // TODO: Create separate steps for blur, fill, foregroundSrc, format, gradient, srcCallback. This step is too long
      switch (control) {
        case 'blur':
          switch (value) {
            case 'true':
              cy.get(Artwork.blur).should('exist');
              break;
            case 'false':
              cy.get(Artwork.blur).should('not.exist');
              break;
            default:
              throw new Error(
                'Please check the page value name or implement the missing case.'
              );
            }
          break;
        case 'fill':
          switch (value) {
            case 'true':
              cy.get(Artwork.fill).should('exist');
              break;
            case 'false':
              cy.get(Artwork.fill).should('not.exist');
              break;
            default:
              throw new Error(
                'Please check the page value name or implement the missing case.'
              );
            }
          break;
        case 'foregroundSrc':
          switch (value) {
            case 'none':
              cy.get(Artwork.foregroundImage).should('not.exist');
              break;
            default:
              throw new Error(
                'Please check the page value name or implement the missing case.'
              );
            }
          break;
        case 'format':
          switch (value) {
            case 'default':
              cy.get(Artwork.blur).should('not.exist');
              cy.get(Artwork.centerImage).should('not.exist');
              cy.get(Artwork.centerImageContainedImage).should('not.exist');
              break;
            case 'circle':
              // Blocked due to use of global values
              // Prevenvting check to verify this is a circle vs square
              throw new Error(
                'The \'circle\' case does not yet have a proper implementation.'
              );
              // cy.get(Artwork.blur).should('exist');
              // cy.get(Artwork.centerImage).should('exist');
              // cy.get(Artwork.centerImageContainedImage).should('exist');
              // break;
            case 'square':
              cy.get(Artwork.blur).should('exist');
              cy.get(Artwork.centerImage).should('exist');
              cy.get(Artwork.centerImageContainedImage).should('exist');
              // Add check to ensure it's a square
              break;
            case 'contain':
              cy.get(Artwork.blur).should('exist');
              cy.get(Artwork.centerImage).should('exist');
              cy.get(Artwork.centerImageContainedImage).should('not.exist');
              break;
            default:
              throw new Error(
                'Please check the page value name or implement the missing case.'
              );
            }
          break;
        case 'gradient':
          switch (value) {
            case 'true':
              cy.get(Artwork.gradient).should('exist');
              break;
            case 'false':
              cy.wait(500).get(Artwork.gradient).should('not.exist');
              break;
            default:
              throw new Error(
                'Please check the page value name or implement the missing case.'
              );
            }
          break;
        case 'srcCallback':
          switch (value) {
            case 'true':
              cy.get(Artwork.image)
              .should('have.attr', 'src')
              .should('contain', 'ratio=16x9');
              break;
            case 'false':
              cy.get(Artwork.image)
              .should('have.attr', 'src')
              .should('contain', 'ratio=3x4');
              break;
            default:
              throw new Error(
                'Please check the page value name or implement the missing case.'
              );
            }
          break;
        default:
          throw new Error(
            'Please check the page value name or implement the missing case.'
          );
        }
      }
  );
}