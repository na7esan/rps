<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <!--reset.css-->
        <link href="{{secure_asset('/assets/css/reset.css')}}" rel="stylesheet">
        <!--style.css-->
        <link href="{{secure_asset('/assets/css/style.css')}}" rel="stylesheet">

    </head>
    
    <body style="border: 1px solid red;">
    <header>
        <h1>じゃんけん</h1>
    </header>

    <main>
        <ul>
          <li id="gu_btn">グー</li>
          <li id="cho_btn">チョキ</li>
          <li id="par_btn">パー</li>
        </ul>
        <div>コンピュータの出した手は？「<span id="pc_hands">なに？</span>」</div>
        <div id="judgement">勝敗は？<span id="result">なに？</span></div>
        <!-- 総対戦数を表示 -->
        <div id="total">総対戦数：<span id="battleTotal">0</span></div>
        <!-- 勝ち数を表示 -->
        <div id="win">勝ち数：<span id="winTotal">0</span></div>
        <!-- 負け数を表示 -->
        <div id="lose">負け数：<span id="loseTotal">0</span></div>
        <!-- 引き分け数を表示 -->
        <div id="draw">引分け数：<span id="drawTotal">0</span></div>
    
    </main>

      <footer>
        
      </footer>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
      <script src="{{secure_asset('/assets/js/script.js')}}"></script>
    </body>
</html>
