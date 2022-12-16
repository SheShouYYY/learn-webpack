module.exports = {
    mode: "production",
    // entry: "./hello/hello.js"
    // output: {
    //     clean: true
    // }
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}