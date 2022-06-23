import gulp from "gulp";

import { path } from "./gulp/config/path.js"
import { plugins } from "./gulp/config/plugins.js"

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins
}


import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { scssPosts } from "./gulp/tasks/scssPosts.js";
import { scssSearch } from "./gulp/tasks/scssSearch.js";
import { scssProfile } from "./gulp/tasks/scssProfile.js";
import { scssGallery } from "./gulp/tasks/scssGallery.js";
import { scssTags } from "./gulp/tasks/scssTags.js";
import { scssSettings } from "./gulp/tasks/scssSettings.js";
import { scssBlockchain } from "./gulp/tasks/scssBlockchain.js";
import { scssBlockchainCat } from "./gulp/tasks/scssBlockchainCat.js";
import { scssBlockchainList } from "./gulp/tasks/scssBlockchainList.js";
import { scssTables } from "./gulp/tasks/scssTables.js";
import { scssPrivacyPolicy } from "./gulp/tasks/scssPrivacyPolicy.js";
import { scssTermsConditions } from "./gulp/tasks/scssTermsConditions.js";
import { scssRegister } from "./gulp/tasks/scssRegister.js";
import { js } from "./gulp/tasks/js.js";
import { svgSpriteTask } from "./gulp/tasks/svg_sprite.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { copyCss, copyJs } from "./gulp/tasks/assets.js";

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.scssPosts, scssPosts)
  gulp.watch(path.watch.scssSearch, scssSearch)
  gulp.watch(path.watch.scssProfile, scssProfile)
  gulp.watch(path.watch.scssGallery, scssGallery)
  gulp.watch(path.watch.scssTags, scssTags)
  gulp.watch(path.watch.scssSettings, scssSettings)
  gulp.watch(path.watch.scssBlockchain, scssBlockchain)
  gulp.watch(path.watch.scssBlockchainCat, scssBlockchainCat)
  gulp.watch(path.watch.scssBlockchainList, scssBlockchainList)
  gulp.watch(path.watch.scssTables, scssTables)
  gulp.watch(path.watch.scssPrivacyPolicy, scssPrivacyPolicy)
  gulp.watch(path.watch.scssTermsConditions, scssTermsConditions)
  gulp.watch(path.watch.scssRegister, scssRegister)
  gulp.watch(path.watch.js, js)
  gulp.watch(path.watch.images, images)
  gulp.watch(path.watch.sprite, svgSpriteTask)
  gulp.watch(path.watch.assetsjs, copyJs)
  gulp.watch(path.watch.assetscss, copyCss)
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const assets = gulp.series(copyJs, copyCss);
// Основные задачи

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, scssPosts, scssTables, scssSearch, scssGallery, scssProfile, scssTags, scssBlockchain, scssBlockchainCat, scssBlockchainList, scssPrivacyPolicy, scssTermsConditions, scssRegister, scssSettings, js, images, svgSpriteTask, assets));


// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Выполнение сценария по умолчанию
gulp.task('default', dev);