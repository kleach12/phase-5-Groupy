class AvatarsController < ApplicationController
  wrap_parameters format: []
  def create
    # user = user_in_session
    # if user
      avatar = Avatar.create(avatar_params)
      if avatar
        render json: avatar, status: :created, location: @post
      else
        render json: avatar.errors, status: :unprocessable_entity
      end
    # end
  end

  private

  def avatar_params
    params.permit(:image, :title)
  end

  def user_in_session
    User.find_by(id: session[:user_id]) 
  end
end
