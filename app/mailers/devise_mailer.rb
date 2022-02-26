require 'digest/sha2'
class DeviseMailer < Devise::Mailer
  default "Message-ID"=>"#{Digest::SHA2.hexdigest(Time.now.to_i.to_s)}@#{CONFIG[:message_id_domain]}"

end