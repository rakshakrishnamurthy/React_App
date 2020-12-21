

export class DataGridSharedData {

    public static getEmployees(count?: number): any[] {
        if (count === undefined) {
            count = 250;
        }

        const employees: any[] = [];
        
        let maleCount: number = 0;
        let femaleCount: number = 0;
        for (let i = 0; i < 30; i++) {
            console.log("emloyees")
            const age: number = Math.round(this.getRandomNumber(20, 40));
            const gender: string = this.getRandomGender();
            const firstName: string = this.getRandomNameFirst(gender);
            const lastName: string = this.getRandomNameLast();
            const street: string = this.getRandomStreet();
            const country: string = this.getRandomItem(this.countries);
            const city: string = this.getRandomCity(country);
            const generation = Math.floor(age / 10) * 10 + "s";
            const email: string = firstName.toLowerCase() + "@" + this.getRandomItem(this.emails);
            const website: string = firstName.toLowerCase() + "-" + this.getRandomItem(this.websites);
            let photoPath: any;

            if (gender === "male") {
                maleCount++;
                if (maleCount > 26) {
                    maleCount = 1;
                }
     
            }
            else {
                femaleCount++;
                if (femaleCount > 24) {
                    femaleCount = 1;
                }
           
            }

            let person: any = {};
            person.Address = street + "," + city;
            person.Age = age;
            person.Birthday = this.getBirthday(age);
            person.City = city;
            person.Country = country;
         
            person.Email = email;
            person.FirstName = firstName;
            
            person.Generation = generation;
            person.ID = this.pad(i + 1, 5);
            person.LastName = lastName;
            person.Name = firstName + " " + lastName;
            person.Phone = this.getRandomPhone();
            person.Photo = photoPath;
            person.Street = street;
            person.Salary = this.getRandomNumber(40, 200) * 1000;
            person.Sales = this.getRandomNumber(200, 980) * 1000;
            person.Website = website;
            person.Productivity = this.getProductivity();

            if (person.Salary < 50000) {
                person.Income = "Low";
            } else if (person.Salary < 100000) {
                person.Income = "Average";
            } else {
                person.Income = "High";
            }

            employees.push(person);
        }
        var employees1 = [
            {
              "Address": "205 Main Street,Montreal",
              "Age": 35,
              "Birthday": "1985-04-12T18:30:00.000Z",
              "City": "Montreal",
              "Country": "Canada",
              "CountryFlag": "https://static.infragistics.com/xplatform/images/flags/Canada.png",
              "Email": "oscar@yahoo.com",
              "FirstName": "Oscar",
              "Gender": "https://static.infragistics.com/xplatform/images/genders/male.png",
              "Generation": "30s",
              "ID": "00001",
              "LastName": "Johnson",
              "Name": "Oscar Johnson",
              "Phone": "878-415-5526",
              "Photo": "https://static.infragistics.com/xplatform/images/people//GUY01.png",
              "Street": "205 Main Street",
              "Salary": 47000,
              "Sales": 958000,
              "Website": "oscar-.edu",
              "Productivity": [
                {
                  "Value": -32,
                  "Week": 0
                },
                {
                  "Value": -6,
                  "Week": 1
                },
                {
                  "Value": -27,
                  "Week": 2
                },
                {
                  "Value": -22,
                  "Week": 3
                },
                {
                  "Value": -41,
                  "Week": 4
                },
                {
                  "Value": -8,
                  "Week": 5
                },
                {
                  "Value": 37,
                  "Week": 6
                },
                {
                  "Value": 1,
                  "Week": 7
                },
                {
                  "Value": 6,
                  "Week": 8
                },
                {
                  "Value": 38,
                  "Week": 9
                },
                {
                  "Value": 46,
                  "Week": 10
                },
                {
                  "Value": -44,
                  "Week": 11
                },
                {
                  "Value": -4,
                  "Week": 12
                },
                {
                  "Value": 19,
                  "Week": 13
                },
                {
                  "Value": 27,
                  "Week": 14
                },
                {
                  "Value": 14,
                  "Week": 15
                },
                {
                  "Value": 16,
                  "Week": 16
                },
                {
                  "Value": 31,
                  "Week": 17
                },
                {
                  "Value": 22,
                  "Week": 18
                },
                {
                  "Value": 37,
                  "Week": 19
                },
                {
                  "Value": 8,
                  "Week": 20
                },
                {
                  "Value": -41,
                  "Week": 21
                },
                {
                  "Value": 31,
                  "Week": 22
                },
                {
                  "Value": -47,
                  "Week": 23
                },
                {
                  "Value": -32,
                  "Week": 24
                },
                {
                  "Value": 38,
                  "Week": 25
                },
                {
                  "Value": 19,
                  "Week": 26
                },
                {
                  "Value": 2,
                  "Week": 27
                },
                {
                  "Value": 7,
                  "Week": 28
                },
                {
                  "Value": -26,
                  "Week": 29
                },
                {
                  "Value": -27,
                  "Week": 30
                },
                {
                  "Value": 35,
                  "Week": 31
                },
                {
                  "Value": -30,
                  "Week": 32
                },
                {
                  "Value": 46,
                  "Week": 33
                },
                {
                  "Value": -24,
                  "Week": 34
                },
                {
                  "Value": 49,
                  "Week": 35
                },
                {
                  "Value": -42,
                  "Week": 36
                },
                {
                  "Value": 20,
                  "Week": 37
                },
                {
                  "Value": -3,
                  "Week": 38
                },
                {
                  "Value": 38,
                  "Week": 39
                },
                {
                  "Value": -29,
                  "Week": 40
                },
                {
                  "Value": 28,
                  "Week": 41
                },
                {
                  "Value": 13,
                  "Week": 42
                },
                {
                  "Value": 37,
                  "Week": 43
                },
                {
                  "Value": 10,
                  "Week": 44
                },
                {
                  "Value": -45,
                  "Week": 45
                },
                {
                  "Value": -29,
                  "Week": 46
                },
                {
                  "Value": 24,
                  "Week": 47
                },
                {
                  "Value": -47,
                  "Week": 48
                },
                {
                  "Value": 17,
                  "Week": 49
                },
                {
                  "Value": -45,
                  "Week": 50
                },
                {
                  "Value": -46,
                  "Week": 51
                }
              ],
              "Income": "Low"
            },
            {
              "Address": "121 Garden Street,Montreal",
              "Age": 30,
              "Birthday": "1990-03-15T18:30:00.000Z",
              "City": "Montreal",
              "Country": "Canada",
              "CountryFlag": "https://static.infragistics.com/xplatform/images/flags/Canada.png",
              "Email": "andrew@gmail.com",
              "FirstName": "Andrew",
              "Gender": "https://static.infragistics.com/xplatform/images/genders/male.png",
              "Generation": "30s",
              "ID": "00002",
              "LastName": "Irvine",
              "Name": "Andrew Irvine",
              "Phone": "597-589-7829",
              "Photo": "https://static.infragistics.com/xplatform/images/people//GUY02.png",
              "Street": "121 Garden Street",
              "Salary": 146000,
              "Sales": 474000,
              "Website": "andrew-.gov",
              "Productivity": [
                {
                  "Value": 5,
                  "Week": 0
                },
                {
                  "Value": 9,
                  "Week": 1
                },
                {
                  "Value": 2,
                  "Week": 2
                },
                {
                  "Value": 8,
                  "Week": 3
                },
                {
                  "Value": 27,
                  "Week": 4
                },
                {
                  "Value": -2,
                  "Week": 5
                },
                {
                  "Value": 37,
                  "Week": 6
                },
                {
                  "Value": -3,
                  "Week": 7
                },
                {
                  "Value": 4,
                  "Week": 8
                },
                {
                  "Value": 3,
                  "Week": 9
                },
                {
                  "Value": -3,
                  "Week": 10
                },
                {
                  "Value": -42,
                  "Week": 11
                },
                {
                  "Value": -40,
                  "Week": 12
                },
                {
                  "Value": 26,
                  "Week": 13
                },
                {
                  "Value": 2,
                  "Week": 14
                },
                {
                  "Value": 49,
                  "Week": 15
                },
                {
                  "Value": 32,
                  "Week": 16
                },
                {
                  "Value": -36,
                  "Week": 17
                },
                {
                  "Value": -23,
                  "Week": 18
                },
                {
                  "Value": 32,
                  "Week": 19
                },
                {
                  "Value": 10,
                  "Week": 20
                },
                {
                  "Value": 28,
                  "Week": 21
                },
                {
                  "Value": -29,
                  "Week": 22
                },
                {
                  "Value": 23,
                  "Week": 23
                },
                {
                  "Value": 49,
                  "Week": 24
                },
                {
                  "Value": -4,
                  "Week": 25
                },
                {
                  "Value": 35,
                  "Week": 26
                },
                {
                  "Value": -35,
                  "Week": 27
                },
                {
                  "Value": -24,
                  "Week": 28
                },
                {
                  "Value": 13,
                  "Week": 29
                },
                {
                  "Value": -48,
                  "Week": 30
                },
                {
                  "Value": -43,
                  "Week": 31
                },
                {
                  "Value": -5,
                  "Week": 32
                },
                {
                  "Value": -16,
                  "Week": 33
                },
                {
                  "Value": -49,
                  "Week": 34
                },
                {
                  "Value": 5,
                  "Week": 35
                },
                {
                  "Value": 14,
                  "Week": 36
                },
                {
                  "Value": 8,
                  "Week": 37
                },
                {
                  "Value": -13,
                  "Week": 38
                },
                {
                  "Value": 15,
                  "Week": 39
                },
                {
                  "Value": 3,
                  "Week": 40
                },
                {
                  "Value": 21,
                  "Week": 41
                },
                {
                  "Value": -17,
                  "Week": 42
                },
                {
                  "Value": -29,
                  "Week": 43
                },
                {
                  "Value": 6,
                  "Week": 44
                },
                {
                  "Value": -47,
                  "Week": 45
                },
                {
                  "Value": -38,
                  "Week": 46
                },
                {
                  "Value": 41,
                  "Week": 47
                },
                {
                  "Value": -20,
                  "Week": 48
                },
                {
                  "Value": -45,
                  "Week": 49
                },
                {
                  "Value": -12,
                  "Week": 50
                },
                {
                  "Value": 13,
                  "Week": 51
                }
              ],
              "Income": "High"
            },
            {
              "Address": "114 Pine Street,Liverpool",
              "Age": 35,
              "Birthday": "1985-02-22T18:30:00.000Z",
              "City": "Liverpool",
              "Country": "UK",
              "CountryFlag": "https://static.infragistics.com/xplatform/images/flags/UK.png",
              "Email": "oscar@yahoo.com",
              "FirstName": "Oscar",
              "Gender": "https://static.infragistics.com/xplatform/images/genders/male.png",
              "Generation": "30s",
              "ID": "00003",
              "LastName": "Williams",
              "Name": "Oscar Williams",
              "Phone": "439-148-2315",
              "Photo": "https://static.infragistics.com/xplatform/images/people//GUY03.png",
              "Street": "114 Pine Street",
              "Salary": 185000,
              "Sales": 556000,
              "Website": "oscar-.edu",
              "Productivity": [
                {
                  "Value": 4,
                  "Week": 0
                },
                {
                  "Value": -26,
                  "Week": 1
                },
                {
                  "Value": -14,
                  "Week": 2
                },
                {
                  "Value": -18,
                  "Week": 3
                },
                {
                  "Value": 4,
                  "Week": 4
                },
                {
                  "Value": 15,
                  "Week": 5
                },
                {
                  "Value": 36,
                  "Week": 6
                },
                {
                  "Value": 28,
                  "Week": 7
                },
                {
                  "Value": 34,
                  "Week": 8
                },
                {
                  "Value": 6,
                  "Week": 9
                },
                {
                  "Value": -15,
                  "Week": 10
                },
                {
                  "Value": -8,
                  "Week": 11
                },
                {
                  "Value": 41,
                  "Week": 12
                },
                {
                  "Value": -2,
                  "Week": 13
                },
                {
                  "Value": -28,
                  "Week": 14
                },
                {
                  "Value": -16,
                  "Week": 15
                },
                {
                  "Value": -31,
                  "Week": 16
                },
                {
                  "Value": 15,
                  "Week": 17
                },
                {
                  "Value": -35,
                  "Week": 18
                },
                {
                  "Value": -6,
                  "Week": 19
                },
                {
                  "Value": 32,
                  "Week": 20
                },
                {
                  "Value": -47,
                  "Week": 21
                },
                {
                  "Value": 41,
                  "Week": 22
                },
                {
                  "Value": 6,
                  "Week": 23
                },
                {
                  "Value": 19,
                  "Week": 24
                },
                {
                  "Value": 48,
                  "Week": 25
                },
                {
                  "Value": -40,
                  "Week": 26
                },
                {
                  "Value": 20,
                  "Week": 27
                },
                {
                  "Value": 6,
                  "Week": 28
                },
                {
                  "Value": 27,
                  "Week": 29
                },
                {
                  "Value": -2,
                  "Week": 30
                },
                {
                  "Value": -31,
                  "Week": 31
                },
                {
                  "Value": -14,
                  "Week": 32
                },
                {
                  "Value": -4,
                  "Week": 33
                },
                {
                  "Value": -4,
                  "Week": 34
                },
                {
                  "Value": 30,
                  "Week": 35
                },
                {
                  "Value": -42,
                  "Week": 36
                },
                {
                  "Value": -13,
                  "Week": 37
                },
                {
                  "Value": 18,
                  "Week": 38
                },
                {
                  "Value": -8,
                  "Week": 39
                },
                {
                  "Value": -16,
                  "Week": 40
                },
                {
                  "Value": -46,
                  "Week": 41
                },
                {
                  "Value": 39,
                  "Week": 42
                },
                {
                  "Value": 4,
                  "Week": 43
                },
                {
                  "Value": 24,
                  "Week": 44
                },
                {
                  "Value": -28,
                  "Week": 45
                },
                {
                  "Value": 34,
                  "Week": 46
                },
                {
                  "Value": -39,
                  "Week": 47
                },
                {
                  "Value": -3,
                  "Week": 48
                },
                {
                  "Value": -21,
                  "Week": 49
                },
                {
                  "Value": 5,
                  "Week": 50
                },
                {
                  "Value": 22,
                  "Week": 51
                }
              ],
              "Income": "High"
            },
            {
              "Address": "130 Market Road,Liverpool",
              "Age": 23,
              "Birthday": "1997-09-19T18:30:00.000Z",
              "City": "Liverpool",
              "Country": "UK",
              "CountryFlag": "https://static.infragistics.com/xplatform/images/flags/UK.png",
              "Email": "oscar@gmail.com",
              "FirstName": "Oscar",
              "Gender": "https://static.infragistics.com/xplatform/images/genders/male.png",
              "Generation": "20s",
              "ID": "00004",
              "LastName": "Johnson",
              "Name": "Oscar Johnson",
              "Phone": "614-513-5842",
              "Photo": "https://static.infragistics.com/xplatform/images/people//GUY04.png",
              "Street": "130 Market Road",
              "Salary": 52000,
              "Sales": 774000,
              "Website": "oscar-.edu",
              "Productivity": [
                {
                  "Value": 39,
                  "Week": 0
                },
                {
                  "Value": 0,
                  "Week": 1
                },
                {
                  "Value": -42,
                  "Week": 2
                },
                {
                  "Value": -3,
                  "Week": 3
                },
                {
                  "Value": -48,
                  "Week": 4
                },
                {
                  "Value": 32,
                  "Week": 5
                },
                {
                  "Value": -4,
                  "Week": 6
                },
                {
                  "Value": -23,
                  "Week": 7
                },
                {
                  "Value": 46,
                  "Week": 8
                },
                {
                  "Value": -16,
                  "Week": 9
                },
                {
                  "Value": 28,
                  "Week": 10
                },
                {
                  "Value": 10,
                  "Week": 11
                },
                {
                  "Value": -8,
                  "Week": 12
                },
                {
                  "Value": -41,
                  "Week": 13
                },
                {
                  "Value": 33,
                  "Week": 14
                },
                {
                  "Value": -4,
                  "Week": 15
                },
                {
                  "Value": -3,
                  "Week": 16
                },
                {
                  "Value": 7,
                  "Week": 17
                },
                {
                  "Value": -14,
                  "Week": 18
                },
                {
                  "Value": -33,
                  "Week": 19
                },
                {
                  "Value": -25,
                  "Week": 20
                },
                {
                  "Value": -28,
                  "Week": 21
                },
                {
                  "Value": -8,
                  "Week": 22
                },
                {
                  "Value": 13,
                  "Week": 23
                },
                {
                  "Value": -2,
                  "Week": 24
                },
                {
                  "Value": 7,
                  "Week": 25
                },
                {
                  "Value": 42,
                  "Week": 26
                },
                {
                  "Value": 32,
                  "Week": 27
                },
                {
                  "Value": -46,
                  "Week": 28
                },
                {
                  "Value": -45,
                  "Week": 29
                },
                {
                  "Value": 8,
                  "Week": 30
                },
                {
                  "Value": -12,
                  "Week": 31
                },
                {
                  "Value": 2,
                  "Week": 32
                },
                {
                  "Value": -21,
                  "Week": 33
                },
                {
                  "Value": 31,
                  "Week": 34
                },
                {
                  "Value": -26,
                  "Week": 35
                },
                {
                  "Value": 35,
                  "Week": 36
                },
                {
                  "Value": -34,
                  "Week": 37
                },
                {
                  "Value": 47,
                  "Week": 38
                },
                {
                  "Value": 30,
                  "Week": 39
                },
                {
                  "Value": 26,
                  "Week": 40
                },
                {
                  "Value": 46,
                  "Week": 41
                },
                {
                  "Value": 38,
                  "Week": 42
                },
                {
                  "Value": 34,
                  "Week": 43
                },
                {
                  "Value": -12,
                  "Week": 44
                },
                {
                  "Value": -9,
                  "Week": 45
                },
                {
                  "Value": -14,
                  "Week": 46
                },
                {
                  "Value": -9,
                  "Week": 47
                },
                {
                  "Value": 20,
                  "Week": 48
                },
                {
                  "Value": 29,
                  "Week": 49
                },
                {
                  "Value": -17,
                  "Week": 50
                },
                {
                  "Value": -38,
                  "Week": 51
                }
              ],
              "Income": "Average"
            }
          ];


        return employees;
    }

    public static getProductivity(weekCount?: number): any[] {
        if (weekCount === undefined) {
            weekCount = 52;
        }
        const productivity: any[] = [];
        for (let w = 0; w < weekCount; w++) {
            const value = this.getRandomNumber(-50, 50);
            productivity.push({Value: value, Week: w});
        }
        return productivity;
    }

    public static getSales(count?: number): any[] {
        if (count === undefined) {
            count = 250;
        }

        const names: string[] = [
            "Intel CPU", "AMD CPU",
            "Intel Motherboard", "AMD Motherboard", "NVIDIA Motherboard",
            "NVIDIA GPU", "GIGABYTE GPU", "Asus GPU", "AMD GPU", "MSI GPU",
            "Corsair Memory", "Patriot Memory", "Skill Memory",
            "Samsung HDD", "WD HDD", "Seagate HDD", "Intel HDD",
            "Samsung SSD", "WD SSD", "Seagate SSD", "Intel SSD",
            "Samsung Monitor", "Asus Monitor", "LG Monitor", "HP Monitor" ];
        const countries: string[] = ["USA", "UK", "France", "Canada", "Poland", "Japan", "Germany"];
        const status: string[] = ["Packing", "Shipped", "Delivered"];
        const sales: any[] = [];

        for (let i = 0; i < count; i++) {
            const price = this.getRandomNumber(100, 900);
            const items = this.getRandomNumber(10, 80);
            const value = price * items;
            const margin = this.getRandomNumber(3, 10);
            const profit = Math.round((price * margin / 100) * items);
            const country = this.getRandomItem(countries);
            sales.push({
                BundlePrice: price,
                ProductPrice: price,
                Margin: margin,
                OrderDate: this.getRandomDate(new Date(2012, 0, 1), new Date()),
                OrderItems: items,
                OrderValue: value, //  Math.round(value / 1000) + "," + Math.round(value % 1000),
                ProductID: 1001 + i,
                ProductName: this.getRandomItem(names),
                Profit: profit,
                Countries: country,
            
                Status: this.getRandomItem(status)
            });
        }
        return sales;
    }

    public static getHouses(count?: number): any[] {
        if (count === undefined) {
            count = 250;
        }

        const houses: any[] = [];
        const property: string[] = [ "Townhouse", "Single", "Condo", "Villa"];
        const emails: string[] = [ "estates.com", "remax.com", "zillow.com", "realtor.com", "coldwell.com"];
        const countries: string[] = ["USA", "UK", "France", "Canada", "Poland", "Japan", "Germany"];

        for (let i = 0; i < count; i++) {
            const year: number = this.getRandomNumber(1950, 2015);
            const age: number = 2020 - year;

            const gender: string = this.getRandomGender();
            const firstName: string = this.getRandomNameFirst(gender);
            const lastName: string = this.getRandomNameLast();
            const initials = firstName.substr(0, 1).toLowerCase();
            const email: string = initials + lastName.toLowerCase() + "@" + this.getRandomItem(emails);

            const street: string = this.getRandomStreet();
            const country: string = this.getRandomItem(countries);
            const city: string = this.getRandomCity(country);

            houses.push({
                Address: street + "," + city,
                Age: age,
                Agent: firstName + " " + lastName,
                Area: this.getRandomNumber(50, 300),
                Baths: this.getRandomNumber(1, 3),
                Built: year,
                City: city,
            
             
                Email: email,
                ID: this.pad(i + 1, 5),
                Phone: this.getRandomPhone(),
                Price: this.getRandomNumber(210, 900) * 1000,
                Property: this.getRandomItem(property),
                Rooms: this.getRandomNumber(2, 5),
                SaleDate: this.getRandomDate(new Date(2015, 0, 1), new Date()),
                Street: street,
            });
        }
        return houses;
    }

    private static websites: string[] = [ ".com", ".gov", ".edu", ".org"];
    private static emails: string[] = [ "gmail.com", "yahoo.com", "twitter.com"];
    private static genders: string[] = ["male", "female"];
    private static maleNames: string[] = ["Kyle", "Oscar", "Ralph", "Mike", "Bill", "Frank", "Howard", "Jack", "Larry", "Pete", "Steve", "Vince", "Mark", "Alex", "Max", "Brian", "Chris", "Andrew", "Martin", "Mike", "Steve", "Glenn", "Bruce"];
    private static femaleNames: string[] = ["Gina", "Irene", "Katie", "Brenda", "Casey", "Fiona", "Holly", "Kate", "Liz", "Pamela", "Nelly", "Marisa", "Monica", "Anna", "Jessica", "Sofia", "Isabella", "Margo", "Jane", "Audrey", "Sally", "Melanie", "Greta", "Aurora", "Sally"];
    private static lastNames: string[] = ["Adams", "Crowley", "Ellis", "Martinez", "Irvine", "Maxwell", "Clark", "Owens", "Rooney", "Lincoln", "Thomas", "Spacey", "MOrgan", "King", "Newton", "Fitzgerald", "Holmes", "Jefferson", "Landry", "Berry", "Perez", "Spencer", "Starr", "Carter", "Edwards", "Stark", "Johnson", "Fitz", "Chief", "Blanc", "Perry", "Stone", "Williams", "Lane", "Jobs", "Adams", "Power", "Tesla"];
    private static countries: string[] = ["USA", "UK", "France", "Canada", "Poland"];
    private static citiesUS: string[] = ["New York", "Los Angeles", "Miami", "San Francisco", "San Diego", "Las Vegas"];
    private static citiesUK: string[] = ["London", "Liverpool", "Manchester"];
    private static citiesFR: string[] = ["Paris", "Marseille", "Lyon"];
    private static citiesCA: string[] = ["Toronto", "Vancouver", "Montreal"];
    private static citiesPL: string[] = ["Krakow", "Warsaw", "Wroclaw", "Gdansk"];
    private static citiesJP: string[] = ["Tokyo", "Osaka", "Kyoto", "Yokohama"];
    private static citiesGR: string[] = ["Berlin", "Bonn", "Cologne", "Munich", "Hamburg"];
    private static roadSuffixes: string[] = ["Road", "Street", "Way"];
    private static roadNames: string[] = ["Main", "Garden", "Broad", "Oak", "Cedar", "Park", "Pine", "Elm", "Market", "Hill"];

    private static getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

    private static getRandomItem(array: any[]): any {
        const index = Math.round(this.getRandomNumber(0, array.length - 1));
        return array[index];
    }

    private static getRandomDate(start: Date, end: Date) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    private static getRandomPhone(): string {
        const phoneCode = this.getRandomNumber(100, 900);
        const phoneNum1 = this.getRandomNumber(100, 900);
        const phoneNum2 = this.getRandomNumber(1000, 9000);
        const phone = phoneCode + "-" + phoneNum1 + "-" + phoneNum2;
        return phone;
    }

    private static getRandomGender(): string {
        return this.getRandomItem(this.genders);
    }

    private static getRandomNameLast(): string {
        return this.getRandomItem(this.lastNames);
    }

    private static getRandomNameFirst(gender: string): string {
        if (gender === "male") {
            return this.getRandomItem(this.maleNames);
        }
        else {
            return this.getRandomItem(this.femaleNames);
        }
    }

    private static getRandomCity(country: string): string {
        if (country === "Canada") {
            return this.getRandomItem(this.citiesCA);
        } else if (country === "France") {
            return this.getRandomItem(this.citiesFR);
        } else if (country === "Poland") {
            return this.getRandomItem(this.citiesPL);
        } else if (country === "USA") {
            return this.getRandomItem(this.citiesUS);
        } else if (country === "Japan") {
            return this.getRandomItem(this.citiesJP);
        } else if (country === "Germany") {
            return this.getRandomItem(this.citiesGR);
        } else { // if (country === "United Kingdom") {
            return this.getRandomItem(this.citiesUK);
        }
    }

    private static getRandomStreet(): string {
        const num = Math.round(this.getRandomNumber(100, 300)).toString();
        const road = this.getRandomItem(this.roadNames);
        const suffix = this.getRandomItem(this.roadSuffixes);
        return num + " " + road + " " + suffix;
    }

    private static getBirthday(age: number): Date {
        const today: Date = new Date();
        const year: number = today.getFullYear() - age;
        const month: number = this.getRandomNumber(0, 8);
        const day: number = this.getRandomNumber(10, 27);
        return new Date(year, month, day);
    }


    private static pad(num: number, size: number) {
        let s = num + "";
        while (s.length < size) {
            s = "0" + s;
        }
        return s;
    }

}
