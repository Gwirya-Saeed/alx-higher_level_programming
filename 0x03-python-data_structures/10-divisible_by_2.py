#!/usr/bin/python3

def divisible_by_2(my_list=[]):
    new_1 = my_list.copy()
    for i in range(0, len(my_list)):
        if my_list[i] % 2 == 0:
            new_1[i] = 1
        else:
            new_1[i] = 0
            return new_1
