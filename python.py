# Storing objects in a file or database, Sending objects over a network, 
# Caching objects in memory, and Creating snapshots of objects.
import pickle     
from abc import ABC, abstractmethod

class Base(ABC):
    def __init__(self, name):
        self.name = name
        self._protected = 'protected'
        self.__private = 'private'
    
    @abstractmethod
    def print_info(self):
        pass

class Derived(Base):
    def __init__(self, name, email):
        super().__init__(name)
        self.email = email

    def print_info(self):
        print(self.name, self.email)

if __name__ == '__main__':
    # derived_obj = Derived('Ram', 'crc.5453@gmail.com')
    # derived_obj.print_info()
    # # Cant access __private variable, but it can with name mangling
    # # this __private value changed from this to => _Base__private
    # print(derived_obj._Base__private)
    ''' Pickling/unpickling
    lst = [1,2,3,4]
    # Serializing: Python to bytestream
    bytestream = pickle.dumps(lst)
    print(bytestream)
    # Deserializing: bytestream to Python
    python_obj = pickle.loads(bytestream)
    print(python_obj)
    '''

    ''' Monkey patching 
    import math

    def sqrt_overrided(val):
        return val ** 3
    
    # Replaced the reference of the original sqrt with the above sqrt_overrided()
    math.sqrt = sqrt_overrided

    print(math.sqrt(2))
    '''