/* eslint-disable import/no-extraneous-dependencies */
import '@storybook/addon-knobs/register';
import '@storybook/addon-links/register';
import { registerDsm } from '@invisionapp/dsm-storybook/register';

registerDsm(process.env.STORYBOOK_DSM);
