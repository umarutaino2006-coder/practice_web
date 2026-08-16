
speed = int(input("Enter the speed limit: "))

speed_limit = speed

for speed in range(0, 201, 20):
    if speed > speed_limit:
        print(f"Speed {speed} m/h exceeds the speed limit of {speed_limit} m/h.")
    else:
        print(f"Speed {speed} m/h is within the speed limit.")
while True:
    user_input = input("Enter a speed to check (or 'exit' to quit): ")
    if user_input.lower() == 'exit':
        break
    try:
        speed_to_check = int(user_input)
        if speed_to_check == 0:
            print(f"You're going too slow")
        elif speed_to_check < 0 :
            print("Speed cannot be negative.")
        elif speed_to_check > 200:
            print("Speed cannot exceed 200 m/h.")
        elif speed_to_check > speed_limit:
            print(f"Speed {speed_to_check} m/h exceeds the speed limit by {speed_to_check - speed_limit} m/h.")
        else:
            print(f"Speed {speed_to_check} m/h is within the speed limit.")
    except ValueError:
        print("Please enter a valid integer for speed or 'exit' to quit.")