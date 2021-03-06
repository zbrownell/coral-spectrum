/**
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import '../coral-theme-spectrum';

import '../coral-externals';
import '../coral-compat';

import translations from './i18n/translations';
import {strings, commons} from '../coral-utils';

import Dialog from './src/scripts/Dialog';
import DialogHeader from './src/scripts/DialogHeader';
import DialogContent from './src/scripts/DialogContent';
import DialogFooter from './src/scripts/DialogFooter';

import './src/styles/index.css';

// i18n
commons.extend(strings, {
  'coral-component-dialog': translations
});

// Expose component on the Coral namespace
commons._define('coral-dialog', Dialog);

Dialog.Header = DialogHeader;
Dialog.Content = DialogContent;
Dialog.Footer = DialogFooter;

export {Dialog};
