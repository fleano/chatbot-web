import React from "react";
import ChatMessage from "./ChatMessage";
import { Box } from "@mui/material";

const ChatRoomMessages = () => {
  return (
    <Box sx={{ overflow: "auto", height: "80vh" }}>
      <ChatMessage isLocalParticipant={true} message="hilloee" />
      <ChatMessage message="hilloee" />
      <ChatMessage message="sfdfsfsfsdfssd" />
      <ChatMessage
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed purus mattis, mattis tortor eu, ultrices nibh. Integer sed nulla ut ante vehicula faucibus nec at risus. In quis ultricies enim. Vivamus ornare tempor sodales. Aliquam sodales egestas luctus. Vivamus ornare nulla hendrerit sem convallis elementum. Morbi id mauris sed mauris congue vulputate. In sed euismod nisl. Mauris vehicula malesuada risus, non faucibus nisl interdum mattis. Quisque sed nulla ut justo lobortis euismod vel eu tortor. Fusce sit amet sem suscipit ligula feugiat laoreet. Fusce lobortis sollicitudin sapien, a pretium sapien porttitor nec.

Sed ullamcorper faucibus est fermentum posuere. Duis a imperdiet lectus, vitae facilisis massa. Vestibulum fringilla lectus id auctor eleifend. Pellentesque lacinia leo enim, eu interdum massa congue a. Fusce ut dignissim metus. Fusce in ipsum eget sapien consectetur tempus nec sed massa. Etiam quis mollis dui, at laoreet tellus. Nulla at sollicitudin mauris.

Vivamus accumsan metus non libero dignissim, vel pulvinar nulla lobortis. Phasellus eget est nulla. Etiam pulvinar, arcu sodales finibus fermentum, orci tellus feugiat odio, consequat ullamcorper risus neque id urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer molestie rutrum lacus tempus accumsan. Integer mollis velit sem, vel malesuada orci placerat vel. Aliquam non lobortis magna. Duis nec efficitur diam, ut egestas nisi. Integer nulla velit, semper at pulvinar et, ullamcorper sed nisl. In non convallis tortor.

Vivamus nec enim nisi. Donec placerat dignissim lacus. Curabitur in semper neque, eget iaculis urna. Vivamus finibus maximus viverra. Vestibulum congue lorem bibendum iaculis ultricies. Aenean pharetra urna nulla, eu iaculis elit porta sed. Nulla gravida eget metus non porta. Duis fermentum nisi vitae diam malesuada bibendum. Etiam nunc est, placerat in convallis a, tincidunt quis turpis. Vivamus varius sem nisi, in tristique lacus volutpat eget.

Nullam et elit vel mauris porta rutrum. Suspendisse dictum sit amet purus egestas posuere. Curabitur vulputate bibendum nunc eget ultrices. Curabitur mattis tellus orci, et convallis turpis hendrerit vel. Suspendisse a purus dolor. Proin ultricies tincidunt convallis. Donec tincidunt porta libero sed congue. Cras pellentesque dolor a ipsum aliquet, non condimentum turpis venenatis. Duis in sapien maximus mauris ultrices ornare."
      />
      <ChatMessage
        isLocalParticipant={true}
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed purus mattis, mattis tortor eu, ultrices nibh. Integer sed nulla ut ante vehicula faucibus nec at risus. In quis ultricies enim. Vivamus ornare tempor sodales. Aliquam sodales egestas luctus. Vivamus ornare nulla hendrerit sem convallis elementum. Morbi id mauris sed mauris congue vulputate. In sed euismod nisl. Mauris vehicula malesuada risus, non faucibus nisl interdum mattis. Quisque sed nulla ut justo lobortis euismod vel eu tortor. Fusce sit amet sem suscipit ligula feugiat laoreet. Fusce lobortis sollicitudin sapien, a pretium sapien porttitor nec.

Sed ullamcorper faucibus est fermentum posuere. Duis a imperdiet lectus, vitae facilisis massa. Vestibulum fringilla lectus id auctor eleifend. Pellentesque lacinia leo enim, eu interdum massa congue a. Fusce ut dignissim metus. Fusce in ipsum eget sapien consectetur tempus nec sed massa. Etiam quis mollis dui, at laoreet tellus. Nulla at sollicitudin mauris.

Vivamus accumsan metus non libero dignissim, vel pulvinar nulla lobortis. Phasellus eget est nulla. Etiam pulvinar, arcu sodales finibus fermentum, orci tellus feugiat odio, consequat ullamcorper risus neque id urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer molestie rutrum lacus tempus accumsan. Integer mollis velit sem, vel malesuada orci placerat vel. Aliquam non lobortis magna. Duis nec efficitur diam, ut egestas nisi. Integer nulla velit, semper at pulvinar et, ullamcorper sed nisl. In non convallis tortor.

Vivamus nec enim nisi. Donec placerat dignissim lacus. Curabitur in semper neque, eget iaculis urna. Vivamus finibus maximus viverra. Vestibulum congue lorem bibendum iaculis ultricies. Aenean pharetra urna nulla, eu iaculis elit porta sed. Nulla gravida eget metus non porta. Duis fermentum nisi vitae diam malesuada bibendum. Etiam nunc est, placerat in convallis a, tincidunt quis turpis. Vivamus varius sem nisi, in tristique lacus volutpat eget.

Nullam et elit vel mauris porta rutrum. Suspendisse dictum sit amet purus egestas posuere. Curabitur vulputate bibendum nunc eget ultrices. Curabitur mattis tellus orci, et convallis turpis hendrerit vel. Suspendisse a purus dolor. Proin ultricies tincidunt convallis. Donec tincidunt porta libero sed congue. Cras pellentesque dolor a ipsum aliquet, non condimentum turpis venenatis. Duis in sapien maximus mauris ultrices ornare."
      />
      <ChatMessage message="hilloee" />
      <ChatMessage message="sfdfsfsfsdfssd" />
      <ChatMessage
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed purus mattis, mattis tortor eu, ultrices nibh. Integer sed nulla ut ante vehicula faucibus nec at risus. In quis ultricies enim. Vivamus ornare tempor sodales. Aliquam sodales egestas luctus. Vivamus ornare nulla hendrerit sem convallis elementum. Morbi id mauris sed mauris congue vulputate. In sed euismod nisl. Mauris vehicula malesuada risus, non faucibus nisl interdum mattis. Quisque sed nulla ut justo lobortis euismod vel eu tortor. Fusce sit amet sem suscipit ligula feugiat laoreet. Fusce lobortis sollicitudin sapien, a pretium sapien porttitor nec.

Sed ullamcorper faucibus est fermentum posuere. Duis a imperdiet lectus, vitae facilisis massa. Vestibulum fringilla lectus id auctor eleifend. Pellentesque lacinia leo enim, eu interdum massa congue a. Fusce ut dignissim metus. Fusce in ipsum eget sapien consectetur tempus nec sed massa. Etiam quis mollis dui, at laoreet tellus. Nulla at sollicitudin mauris.

Vivamus accumsan metus non libero dignissim, vel pulvinar nulla lobortis. Phasellus eget est nulla. Etiam pulvinar, arcu sodales finibus fermentum, orci tellus feugiat odio, consequat ullamcorper risus neque id urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer molestie rutrum lacus tempus accumsan. Integer mollis velit sem, vel malesuada orci placerat vel. Aliquam non lobortis magna. Duis nec efficitur diam, ut egestas nisi. Integer nulla velit, semper at pulvinar et, ullamcorper sed nisl. In non convallis tortor.

Vivamus nec enim nisi. Donec placerat dignissim lacus. Curabitur in semper neque, eget iaculis urna. Vivamus finibus maximus viverra. Vestibulum congue lorem bibendum iaculis ultricies. Aenean pharetra urna nulla, eu iaculis elit porta sed. Nulla gravida eget metus non porta. Duis fermentum nisi vitae diam malesuada bibendum. Etiam nunc est, placerat in convallis a, tincidunt quis turpis. Vivamus varius sem nisi, in tristique lacus volutpat eget.

Nullam et elit vel mauris porta rutrum. Suspendisse dictum sit amet purus egestas posuere. Curabitur vulputate bibendum nunc eget ultrices. Curabitur mattis tellus orci, et convallis turpis hendrerit vel. Suspendisse a purus dolor. Proin ultricies tincidunt convallis. Donec tincidunt porta libero sed congue. Cras pellentesque dolor a ipsum aliquet, non condimentum turpis venenatis. Duis in sapien maximus mauris ultrices ornare."
      />
      <ChatMessage
        isLocalParticipant={true}
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed purus mattis, mattis tortor eu, ultrices nibh. Integer sed nulla ut ante vehicula faucibus nec at risus. In quis ultricies enim. Vivamus ornare tempor sodales. Aliquam sodales egestas luctus. Vivamus ornare nulla hendrerit sem convallis elementum. Morbi id mauris sed mauris congue vulputate. In sed euismod nisl. Mauris vehicula malesuada risus, non faucibus nisl interdum mattis. Quisque sed nulla ut justo lobortis euismod vel eu tortor. Fusce sit amet sem suscipit ligula feugiat laoreet. Fusce lobortis sollicitudin sapien, a pretium sapien porttitor nec.

Sed ullamcorper faucibus est fermentum posuere. Duis a imperdiet lectus, vitae facilisis massa. Vestibulum fringilla lectus id auctor eleifend. Pellentesque lacinia leo enim, eu interdum massa congue a. Fusce ut dignissim metus. Fusce in ipsum eget sapien consectetur tempus nec sed massa. Etiam quis mollis dui, at laoreet tellus. Nulla at sollicitudin mauris.

Vivamus accumsan metus non libero dignissim, vel pulvinar nulla lobortis. Phasellus eget est nulla. Etiam pulvinar, arcu sodales finibus fermentum, orci tellus feugiat odio, consequat ullamcorper risus neque id urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer molestie rutrum lacus tempus accumsan. Integer mollis velit sem, vel malesuada orci placerat vel. Aliquam non lobortis magna. Duis nec efficitur diam, ut egestas nisi. Integer nulla velit, semper at pulvinar et, ullamcorper sed nisl. In non convallis tortor.

Vivamus nec enim nisi. Donec placerat dignissim lacus. Curabitur in semper neque, eget iaculis urna. Vivamus finibus maximus viverra. Vestibulum congue lorem bibendum iaculis ultricies. Aenean pharetra urna nulla, eu iaculis elit porta sed. Nulla gravida eget metus non porta. Duis fermentum nisi vitae diam malesuada bibendum. Etiam nunc est, placerat in convallis a, tincidunt quis turpis. Vivamus varius sem nisi, in tristique lacus volutpat eget.

Nullam et elit vel mauris porta rutrum. Suspendisse dictum sit amet purus egestas posuere. Curabitur vulputate bibendum nunc eget ultrices. Curabitur mattis tellus orci, et convallis turpis hendrerit vel. Suspendisse a purus dolor. Proin ultricies tincidunt convallis. Donec tincidunt porta libero sed congue. Cras pellentesque dolor a ipsum aliquet, non condimentum turpis venenatis. Duis in sapien maximus mauris ultrices ornare."
      />
    </Box>
  );
};

export default ChatRoomMessages;
