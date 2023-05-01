module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user
    identified_by :session_id
    
    def connect
      self.current_user = find_verified_user
      self.session_id = request.session.id
    end

    private
      def find_verified_user
        User.find_by(id: cookies.signed[:user_id])
      end
  end
end
