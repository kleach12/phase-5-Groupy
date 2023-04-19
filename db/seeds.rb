# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'seeding...'

 cities = ['Sacramento', 'Los Angeles', 'San Diego', 'San Francisco', 'San Jose']

 # create some groups with random cities
groups = []
cities.each do |city|
  group = Group.create!(city: city, name: "Welcome to Irl #{city}")
  group.group_pic.attach(io: File.open("app/assests/images/group_default.png"), filename: "group_default.png", content_type: 'image/png')
  groups << group
end

# create some users with random cities
users = []
20.times do |i|
  user = User.create!(
    username: Faker::Lorem.unique.word,
    password: '123456',
    password_confirmation: '123456',
    city: cities.sample
  )
  user.image.attach(io: File.open("app/assests/images/user_default_2.jpg"), filename: "user_default_2.jpg" ,content_type: 'image/jpg')
  users << user
end

# assign users to groups with matching cities
users.each do |user|
  group = groups.find { |g| g.city == user.city }
  group.users << user
end

# create some messages
users.each do |user|
  group = user.groups.sample
  Message.create!(comment: " Hello, #{user.city}!", user: user, group: group)
end


puts 'done'