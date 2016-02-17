class Holiday

  attr_accessor :title, :css_path, :bodyContent, :todayDate

  def initialize
    @checkHoliday = checkHoliday(Time.new)

    @title = @checkHoliday["title"]
    @css_path = @checkHoliday["cssPath"]
    @bodyContent = @checkHoliday["htmlBodyContent"]
    @todayDate = Time.new
  end

  def checkHoliday(whatTime)
    if whatTime.month == 12 && whatTime.day == 25
      return {
        "title" => "Merry Christmas",
        "htmlBodyContent" => "
      <br><br><br><h1>Merry Christmas!</h1><br><br>
      <img src=\"/img/holiday/santa.png\"><br><br><br><br><br><br><br><br><br>
      <h1><p>Wishing you Peace and Joy this Holiday Season</p></h1>
    ",
        "cssPath" => '"/css/holiday/xmas.css"'
      }
    else
      return {
            "title" => "Blondie!",
            "htmlBodyContent" => "    
                <!-- Latest compiled and minified CSS -->
                <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" integrity=\"sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7\" crossorigin=\"anonymous\">

                <!-- Optional theme -->
                <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css\" integrity=\"sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r\" crossorigin=\"anonymous\">

                <!-- Latest compiled and minified JavaScript -->
                <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js\" integrity=\"sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS\" crossorigin=\"anonymous\"></script>

                <div class=\"container\">
                <div class=\"row\" id=\"debbie\">
                  <div class=\"col-md-10 col-md-offset-1 col-sm-12\" >
                    <center>
                      <p><h1>Debbie Harry</h1></p>
                      <p><strong>Singer-songwriter, actress</strong></p<
                    </center>
                  </div>
                      <div class=\"col-md-10 col-md-offset-1 col-sm-10\">
                        <center><div class=\"col-md-6 col-md-offset-3 col-sm-10\" id=\"white\"><img src=\"http://jeremylewis.herokuapp.com/img/stock/blondie.png\" class=\"img-responsive\" id=\"snapshot\"><br>Blondie - \"Heart of Glass\"</div></center>
                          <div class=\"col-md-10 col-md-offset-1 col-sm-12\" >
                            <br><p><strong>Deborah Ann \"Debbie\" Harry </strong><i> (born July 1, 1945)</i> is an American singer-songwriter and actress, best known as the lead singer of the new wave and punk rock band Blondie. She recorded several worldwide number one singles with Blondie during the 1970s and 1980s.</p>
                            <center>
                              <p><h2>My Top 5 Favorite Debbie Harry Songs</h2></p>
                            <ul>
                              <li><strong>1978</strong> - <a href=\"https://www.youtube.com/watch?v=WGU_4-5RaxU\" target=\"_blank\">Heart of Glass</a></li><br>
                              <li><strong>1980</strong> - <a href=\"https://www.youtube.com/watch?v=StKVS0eI85I\" target=\"_blank\">Call Me</a></li><br>
                              <li><strong>1979</strong> - <a href=\"https://www.youtube.com/watch?v=O_WLw_0DFQQ\" target=\"_blank\">Atomic</a></li><br>
                              <li><strong>1980</strong> - <a href=\"https://www.youtube.com/watch?v=ppYgrdJ0pWk\" target=\"_blank\">The Tide Is High</a></li><br>
                              <li><strong>1980</strong> - <a href=\"https://www.youtube.com/watch?v=pHCdS7O248g\" target=\"_blank\">Rapture</a></li><br>
                            </ul>
                            </center>
                          </div>
                          </center>
                          <div class=\"col-md-8 col-md-offset-2 col-sm-10 well\">
                          <p><h3><i>\"I do know the effect that music still has on me - I'm completely vulnerable to it. I'm seduced by it.\"</i></h3><h4 align=\"right\"> - Debbie Harry</h4></p>
                          </div>
                        <div class=\"col-md-8 col-md-offset-2 col-sm-10\">
                          <center><h3><p>If you have time, you should read more about the incredible Debbie Harry on her <a href=\"https://en.wikipedia.org/wiki/Debbie_Harry\" target=\"_blank\">Wikipedia entry</a>.</p><br></h3></center>
                        </div>
                      </div>
                </div>
                </div>
                <div id=\"footer\">
                  <hr>
                    <center>Written and coded by <a href=\"lewisjpaul.tumblr.com\" target=\"_blank\">Jeremy Lewis</a> for the \"Build a Tribute Page\" challenge. </center>
                </div>", 
        "cssPath" => '"/css/holiday/blondie.css"'
      }
    end 

  end

end