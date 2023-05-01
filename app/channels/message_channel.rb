class MessageChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "MessageChannel"
    stream_from params[:room]
  end

  # def receive(payload)
  #   message = Message.create(message_params)
  #   ActionCable.server.broadcast("MessageChannel #{message.group.name}", message)
  # end

  def unsubscribed
    # stop_stream_from params[:room]
  end
end
