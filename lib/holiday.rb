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
#    if whatTime.month == 12 && whatTime.day = 25
      return {
        "htmlBodyContent" => "
      <br><br><br><h1>Merry Christmas!</h1><br><br>
      <img src=\"/img/holiday/santa.png\"><br><br><br><br><br><br><br><br><br>
      <h1><p>Wishing you Peace and Joy this Holiday Season</p></h1>
    ",
        "title" => "Merry Christmas",
        "cssPath" => '"/css/holiday/xmas.css"'
      }
#    end 

  end

end