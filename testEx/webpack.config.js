const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist/assets'),
    },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/assets/',
    },
    module: {
        rules:[
        {
            test:/\.js$/,
            exclude:/node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                },
            },
        },{  
            test:/\.css$/,
            exclude:/node_modules/,
            use:['style-loader', 'css-loader'],
        },{
            test:/\.(png|svg|jpg|gif)$/,
            use:[
                'file-loader'
            ],
        }],
    },
};