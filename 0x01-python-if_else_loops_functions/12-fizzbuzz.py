#!/usr/bin/python3
FIZZ = "Fizz"
BUZZ = "Buzz"


def fizzbuzz():
    for number in range(1, 101):
        if (not number % 3 and not number % 5):
            print("%s%s" % (FIZZ, BUZZ), end=' ')
        elif (not number % 3):
            print("%s" % (FIZZ), end=' ')
        elif (not number % 5):
            print("%s" % (BUZZ), end=' ')
        else:
            print("%d" % (number), end=' ')
