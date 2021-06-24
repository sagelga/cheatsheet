def adder(value_a, value_b):
    result = value_a + value_b + value_c
    return result

def inverse_adder(value_a, value_b):
    result = value_a - value_b - value_c
    return result

def core():
    input_a = 12
    input_b = 24

    add_result = adder(input_a, input_b)
    subtract_result = inverse_adder(input_a, input_b)

    print(add_result)
    print(subtract_result)

value_c = 36
core()
