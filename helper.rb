obj = []
File.open('dummy.txt').each do |line|
  objectJ = ""
  originalName = line.split(":")[0]
  name = line.split(":")[0]
  name.gsub!(' ','_')
  name.gsub!('(','')
  name.gsub!(')','')
  objectJ = "#{name}:{\n"
    finalName = name.gsub("\"","")
  config = line.split(":")[1]
  newConf = config.gsub!('"','').split(",")
  objectJ += "\"type\" : \"#{newConf[0]}\",\n"
  objectJ += "\"data\" : #{newConf[1]},\n"
  objectJ += "\"icon\" : \"icon/#{finalName.gsub(' ','')}.png\",\n"
  objectJ += "\"name\" : #{originalName},\n"
  objectJ += "\"chances\" : {\r\n    \"one\" : {\r\n      \"eggSuccess\" : 60,\r\n      \"eggBreak\" : 20,\r\n      \"eggFail\" : 20\r\n    },\r\n    \"two\" : {\r\n      \"eggSuccess\" : 40,\r\n      \"eggBreak\" : 30,\r\n      \"eggFail\" : 30\r\n    },\r\n    \"three\" : {\r\n      \"eggSuccess\" : 30,\r\n      \"eggBreak\" : 50,\r\n      \"eggFail\" : 20\r\n    },\r\n    \"four\" : {\r\n      \"eggSuccess\" : 10,\r\n      \"eggBreak\" : 80,\r\n      \"eggFail\" : 10\r\n    },\r\n    \"five\" : {\r\n      \"eggSuccess\" : 5,\r\n      \"eggBreak\" : 90,\r\n      \"eggFail\" : 5\r\n    }\r\n  }\n},"
  obj << objectJ
end

puts obj


File.open('object.txt','w+') do |line|
  line.puts(obj)
end
