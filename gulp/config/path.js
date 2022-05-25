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
    scssSearch: `${srcFolder}/scss/styleSearch.scss`,
    scssProfile: `${srcFolder}/scss/styleProfile.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`
  },
  watch: {
    assetscss: `${srcFolder}/assets/**/*.css`,
    assetsjs: `${srcFolder}/assets/**/*.js`,
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    scssPosts: `${srcFolder}/scss/**/*.scss`,
    scssSearch: `${srcFolder}/scss/**/*.scss`,
    scssProfile: `${srcFolder}/scss/**/*.scss`,
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