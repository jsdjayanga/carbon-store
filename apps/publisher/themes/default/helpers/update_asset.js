/*
 *  Copyright (c) 2005-2014, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */
var resources = function (page, meta) {
    return {
       	js:['libs/jquery.form.min.js','publisher-utils.js','update_asset.js','common/option_text.js','date_picker/datepicker.js'],
       	css:['bootstrap-select.min.css','datepick/smoothness.datepick.css','date_picker/datepicker/base.css', 'date_picker/datepicker/clean.css'],
       	code: ['publisher.assets.hbs']
    };
};
