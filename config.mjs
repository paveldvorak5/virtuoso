// @ts-check

// import CopyPlugin from 'copy-webpack-plugin';

/**
 * @type {import('@rspack/cli').Configuration}
 */
const config = {
  entry: {
    main: './src/index.tsx', // Configure the project entry file
  },
  builtins: {
    html: [
      {
        template: './public/index.html', // Align CRA to generate index.html
      },
    ],
    copy: [
        {
            from: 'public',
        }
    ],
    define: {
      "process.env.NODE_ENV": "'development'",
      "process.env.REACT_APP_API_BASE_URL": `'${process.env.REACT_APP_API_BASE_URL || "https://testapi.logbookie.eu"}'`,
      "process.env.REACT_APP_VERSION": `'${process.env.REACT_APP_VERSION || "development"}'`,
      "process.env.REACT_APP_ENVIRONMENT": `'${process.env.REACT_APP_ENVIRONMENT || "development"}'`,
    },
    react: {
      development: false,
      refresh: false,
    },
  },
  resolve: {
    // alias: PathAliases
  },
  devServer: {
    // port: 3000,
    // historyApiFallback: true,
  },
  plugins: [
//     new CopyPlugin({ "patterns":
//       [
//           {
//             from: 'public',
//             to: '.',
//           },
//   ]
// } ),
  ], // Copy the files from the public directory to the dist directory, aligning the behavior of the CRA
  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif|css)$/,
        type: "asset",
      },
    ],
  },
}

export default config;
