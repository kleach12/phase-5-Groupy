class ReactAppController < ActionController::Base

  def index
    render file: 'public/index.html'
  end
end
