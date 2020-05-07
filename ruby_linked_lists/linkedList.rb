class LinkedListNode
  attr_accessor :value, :next_node
  def initialize(value, next_node=nil)
    @value = value
    @next_node = next_node
  end
end

p1 = LinkedListNode.new(5)
p2 = LinkedListNode.new(2, p1)
p3 = LinkedListNode.new("hello", p2)
def printValues(head_node)
  if head_node.next_node.nil?
      print "#{head_node.value} --> nil \n"
  else
    print "#{head_node.value} -->"
    printValues(head_node.next_node)
  end
end

# printValues(p2)


class Stack
  attr_reader :data
  
  def initialize
      @data = nil
  end

  # Push an item onto the stack
  def push(element)
      if @data.nil?
        element.next_node = LinkedListNode.new(nil)
      else
        element.next_node = @data
      end
      @data = element
  end

  # Pop an item off the stack.  
  # Remove the last item that was pushed onto the
  # stack and return it to the user
  def pop
      element_popped = @data.value
      @data = @data.next_node
      return LinkedListNode.new(element_popped)
  end

end

st = Stack.new()

st.push(p1)
st.push(p2)
st.push(p3)

node_back = st.pop()
node_back_2 = st.pop()
node_back_3 = st.pop()
printValues(node_back)
# printValues(node_back_2)
# printValues(node_back_3)


def reverse_list(list)
  # ADD CODE HERE
  stack = Stack.new()

  while list
      stack.push(list)
      # ADD CODE HERE
      list = list.next_node
  end

  # ADD CODE HERE
end