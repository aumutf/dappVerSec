import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    sprites: `${buildFolder}/img/sprite/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`
  },
  src: {
    js: `${srcFolder}/js/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    svgSpriteIcons: `${srcFolder}/img/icons/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    scssPosts: `${srcFolder}/scss/stylePosts.scss`,
    scssPost: `${srcFolder}/scss/stylePost.scss`,
    scssNewsPost: `${srcFolder}/scss/styleNewsPost.scss`,
    scssSearch: `${srcFolder}/scss/styleSearch.scss`,
    scssProfile: `${srcFolder}/scss/styleProfile.scss`,
    scssGallery: `${srcFolder}/scss/styleGallery.scss`,
    scssTags: `${srcFolder}/scss/styleTags.scss`,
    scssSettings: `${srcFolder}/scss/styleSettings.scss`,
    scssBlockchain: `${srcFolder}/scss/styleBlockchain.scss`,
    scssBlockchainCat: `${srcFolder}/scss/styleBlockchainCat.scss`,
    scssBlockchainList: `${srcFolder}/scss/styleBlockchainList.scss`,
    scssTables: `${srcFolder}/scss/styleTables.scss`,
    scssPrivacyPolicy: `${srcFolder}/scss/stylePrivacyPolicy.scss`,
    scssTermsConditions: `${srcFolder}/scss/styleTermsConditions.scss`,
    scssRegister: `${srcFolder}/scss/styleRegister.scss`,
    scssDappsAll: `${srcFolder}/scss/styleDappsAll.scss`,
    scssDapp: `${srcFolder}/scss/styleDapp.scss`,
    scssRank: `${srcFolder}/scss/styleRank.scss`,
    scssCrypto: `${srcFolder}/scss/styleCrypto.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`
  },
  watch: {
    assetscss: `${srcFolder}/assets/**/*.css`,
    assetsjs: `${srcFolder}/assets/**/*.js`,
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    scssPosts: `${srcFolder}/scss/**/*.scss`,
    scssPost: `${srcFolder}/scss/**/*.scss`,
    scssNewsPost: `${srcFolder}/scss/**/*.scss`,
    scssSearch: `${srcFolder}/scss/**/*.scss`,
    scssGallery: `${srcFolder}/scss/**/*.scss`,
    scssProfile: `${srcFolder}/scss/**/*.scss`,
    scssTags: `${srcFolder}/scss/**/*.scss`,
    scssSettings: `${srcFolder}/scss/**/*.scss`,
    scssBlockchain: `${srcFolder}/scss/**/*.scss`,
    scssBlockchainCat: `${srcFolder}/scss/**/*.scss`,
    scssBlockchainList: `${srcFolder}/scss/**/*.scss`,
    scssTables: `${srcFolder}/scss/**/*.scss`,
    scssPrivacyPolicy: `${srcFolder}/scss/**/*.scss`,
    scssTermsConditions: `${srcFolder}/scss/**/*.scss`,
    scssRegister: `${srcFolder}/scss/**/*.scss`,
    scssDappsAll: `${srcFolder}/scss/**/*.scss`,
    scssDapp: `${srcFolder}/scss/**/*.scss`,
    scssRank: `${srcFolder}/scss/**/*.scss`,
    scssCrypto: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    sprite: `${srcFolder}/img/icon/*.svg`,
    files: `${srcFolder}/files/**/*.*`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}