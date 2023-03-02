class UsersController < ApplicationController
  wrap_parameters format: []

  def create 
    user = User.create(user_params)
    # user.pro_pic.attach(params[:pro_pic])
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else 
      render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def show 
    user = user_in_session
    if user
      render json: user
    else
      render json: {error: "No User Signed In"}, status: :ok
    end
  end

  def update_profile
    user = user_in_session
    if user
    if user_params[:file]
      # The data is a file upload coming from <input type="file" />
      user.avatar.attach(params[:file])
      # Generate a url for easy display on the front end 
      image = url_for(@profile.avatar)
    end
      # Now save that url in the profile
    if @profile.update(image: image)
      render json: user, status: :ok
    end
  end
  end

  def add_avatar
    # user = user_in_session
    # if user
      user.avatar.attach(:image)
      render json: user
    # end
  end


  private 

  #try clark johnsons way on medium
  def user_params
    params.permit(:username, :first_name, :last_name, :password, :password_confirmation, :dob, :email, :country, :state, :city, :bio, :facebook, :insta, :tiktok, :twitter, :image)
  end

  def user_update_params
    params.permit(:image)
  end

  def user_in_session
    User.find_by(id: session[:user_id]) 
  end

end


# use attached and new params for update only