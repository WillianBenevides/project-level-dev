class Post < ApplicationRecord
  validates :title, :body, presence: true, length: { in: 5..500 }
  has_many :comments, dependent: :destroy
end
