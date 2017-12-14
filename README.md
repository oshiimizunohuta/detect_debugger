# detect debugger
ブラウザのデバッグコンソールを検知する  
https://oshiimizunohuta.github.io/detect_debugger/

デバッグコンソールを開いた後、ログにメッセージが出力されます。
この挙動が意図した正しいものかはわかりません。今後、使用できなくなる可能性はあると思います。

# 動作
## chrome / edge
**detect.js**側のプロセスがポーズして **main.js**側が検知します。  

## firefox
**main.js**側のプロセスがポーズして**detect.js**側が検知します。  

# 使用例
規定回数カウント後ウィンドウを閉じる(※firefoxではwindowオブジェクトは操作できない)
https://github.com/oshiimizunohuta/detect_debugger/tree/close_win
