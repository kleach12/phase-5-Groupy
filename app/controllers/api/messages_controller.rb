class Api::MessagesController < ApplicationController

  def create 
  user = user_in_session
  if user
    message = Message.create(message_params)
    if message.valid?
      ActionCable.server.broadcast("#{message.group.name}", MessageSerializer.new(message))
      render json: message
    else 
      render json: {errors: message.errors.full_messages}
    end
  else
    render json: {error: 'User is not logged in'}
  end
  end

  def group_messages
    message  = Message.where(group_id: message_params[:group_id])
    # ActionCable.server.broadcast("#{message.group.name}", message)

    render json: message
  end

  private 


  def user_in_session
    User.find_by(id: session[:user_id]) 
  end

  def message_params
    params.permit(:comment, :group_id).merge({user_id: session[:user_id]})
  end
end
