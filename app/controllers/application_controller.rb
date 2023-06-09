class ApplicationController < ActionController::Base
  helper_method :current_user
  def current_user
    return @current_user if @current_user.present?
    if session[:current_id].present? 
      @current_user = User.find(session[:current_id])
    else
      @current_user = User.generate
      session[:current_id] = @current_user.id
      @current_user
    end
  end
end
