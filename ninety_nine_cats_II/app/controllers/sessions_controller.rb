class SessionsController < ApplicationController
  
  def new 
    render :new
  end
  
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    @user.reset_session_token!
    sessions[:session_token] = @user.session_token
    redirect_to cats_url
  end
  
end 