// gulpプラグインを読み込みます
const { src, dest, watch } = require("gulp");
// Sassをコンパイルするプラグインを読み込みます
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require('gulp-sourcemaps');

/**
 * Sassをコンパイルするタスクです
 */
const compileSass = () =>
  // style.scssファイルを取得
  src("./scss/**/*.scss")
    .pipe(sourcemaps.init())
    // Sassのコンパイルを実行
    .pipe(
      // コンパイル後のCSSを展開
      sass({
        outputStyle: "compressed"
      })
    )
    .pipe(sourcemaps.write())
    // cssフォルダー以下に保存
    .pipe(dest("css"));

/**
 * Sassファイルを監視し、変更があったらSassを変換します
 */
const watchSassFiles = () => watch("./scss/**/*.scss", compileSass);

// npx gulpというコマンドを実行した時、watchSassFilesが実行されるようにします
exports.default = watchSassFiles;