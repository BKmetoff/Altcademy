# frozen_string_literal: false

a = '25256262652562'
b = '8790087923478963673763168867989797'
should_match = '8790087923478963673788425130642359'

def big_numbers(big_number1, big_number2, should_match)
  num_array1 = split_string(big_number1)
  num_array2 = split_string(big_number2)

  length1 = num_array1.length
  length2 = num_array2.length

  shorter_array = find_shorter_array(num_array1, num_array2)

  number_of_zeros = (length2 - length1).abs
  number_of_zeros.times { |_| shorter_array << 0 }

  output_string = generate_output_stirng(num_array1, num_array2)

  output_string.reverse == should_match
end

def split_string(string)
  output_array = string.chars.reverse.map(&:to_i)
  output_array
end

def find_shorter_array(array1, array2)
  array1.length < array2.length ? array1 : array2
end

def generate_output_stirng(array1, array2)
  output_string = ''

  array1.length.times do |num_index|
    temp_sum = array1[num_index] + array2[num_index]

    output_string << (temp_sum % 10).to_s

    # guard
    next unless temp_sum > 9

    # will be called if the guard is passed
    if array2[num_index + 1]
      array2[num_index + 1] += 1
    else
      output_string << '1'
    end
  end
  output_string
end

puts big_numbers(a, b, should_match)
