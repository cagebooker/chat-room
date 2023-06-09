class User < ApplicationRecord
  validates_uniqueness_of :username

  def self.generate 
    adjectives = ['保守的','創造的','危險的','效率的','貪婪的','積極的']
    nouns = ['獅子','河馬','大象','海豹','羚羊']
    number = rand.to_s[2..4]
    username = "#{adjectives.sample}-#{nouns.sample}-#{number}"
    create(username: username)
  end
end
