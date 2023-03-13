# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

def even_or_odd(num)
    if num % 2 == 0 
        return "even"
    else
        return "odd"
    end
end



num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

puts even_or_odd(num1)
puts even_or_odd(num2)
puts even_or_odd(num3)


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

def remove_vowles(string)
    string.gsub(/[a,e,i,o,u]/i, '')
end

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

puts remove_vowles(beatles_album1)
puts remove_vowles(beatles_album2)
puts remove_vowles(beatles_album3)



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

def palindrome?(string)
    string.downcase == string.downcase.reverse
end               


palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


puts palindrome?(palindrome_tester1)
puts palindrome?(palindrome_tester2)
puts palindrome?(palindrome_tester3)
