json.array! @guests do |guest|
  # json.partial! 'api/guests/guest', guest: guest
  if guest.age >= 40 && guest.age <= 50
    json.name guest.name
    json.age guest.age
    json.favorite_color guest.favorite_color
  end
end
