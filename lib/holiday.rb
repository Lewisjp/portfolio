class Holiday

  attr_accessor :title, :css_path, :bodyContent, :todayDate

  def initialize
    @title = title
    @css_path = cssPath
    @bodyContent = htmlBodyContent
    @todayDate = Time.new
  end

  def htmlBodyContent
    return "
      <br><br><br><h1>Merry Christmas!</h1><br><br>
      <img src=\"/img/holiday/santa.png\"><br><br><br><br><br><br><br><br><br>
      <h1><p>Wishing you Peace and Joy this Holiday Season</p></h1>
    "
  end

  def title
    return "Merry Christmas"
  end

  def cssPath
    return '"/css/holiday/xmas.css"'
  end

end