'use strict';
var Config = (function () {
    function config() {
        this.source_dir = './app/';
        this.build_dir = './builds/';
        this.bower_lib = './bower_components/';
        this.angular_js_file = 'angular/angular.js';
        this.angular_route_js_file = 'angular-route/angular-route.js';
        this.angular_ui_js_file = 'angular-ui/build/angular-ui.js';
        this.jquery_js_file = 'jquery/dist/jquery.js';
        this.intl_tel_js_file = 'intl-tel-input/build/js/intlTelInput.js';
        this.international_phone_number_js_file = 'international-phone-number/releases/international-phone-number.js';

        this.source_sass = this.source_dir + "sass/**/*.scss";
        this.source_css = this.source_dir + "css/**/*.css";
        this.source_typescript = this.source_dir + "script/**/*.ts";
        this.asset_res = this.source_dir + "asset/**/*.*";


        this.all_typescript_js_folder = this.build_dir + "js/";
        this.all_typescript_js = "all-app-js.js";
        this.all_bower_js_folder = this.build_dir + "js/";
        this.all_bower_js = "all-bower-js.js";
        this.all_minify_css_folder = this.build_dir + "css/";
        this.all_minify_css = "all-css.min.css";

        this.all_sass_css = this.build_dir + "css/all-css.min.css";

        this.lib_typescript = this.source_dir + './typeDir/**/*.ts';
        this.typescript_compile_target_version = 'ES6';
        this.server_port = 3000;
        this.typedef_file = 'tsd.json'
        this.dist_file = 'interview.war'

    }

    return config;
})();
module.exports = Config;
