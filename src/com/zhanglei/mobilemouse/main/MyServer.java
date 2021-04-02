package com.zhanglei.mobilemouse.main;




import com.zhanglei.mobilemouse.networkutil.CommandReceiver;
import com.zhanglei.mobilemouse.networkutil.CommandReceiver.DeliveryCommand;
import com.zhanglei.mobilemouse.operation.OperationData;
import com.zhanglei.mobilemouse.operation.OperationDecode;
import com.zhanglei.mobilemouse.utils.MouseUtil;

public class MyServer {
	private static final float MOVE_RATIO = 0.2f;
	public static void main(String[] args) {
		CommandReceiver receiver = new CommandReceiver(new DeliveryCommand() {
			
			int y = 0;
			
			@Override
			public void deliverResult(String command) {
				
				y = parseCommand(command, y);
				//System.out.println("received: " + OperationDecode.decode(command));
				
			}
			
			@Override
			public void deliverError(String error) {
				// TODO Auto-generated method stub
				System.out.println("Error: " + error);
			}
		});
		receiver.start();
		MouseUtil.moveCenter();
	}
	
	private static int parseCommand(String command, int y) {
		OperationData operation = OperationDecode.decode(command);
		
		switch (operation.getOperationKind()) {
		case OperationData.OPERATION_MOVE:
			int moveX = (int) (operation.getMoveX() * MOVE_RATIO);
			int moveY = (int) (operation.getMoveY() * MOVE_RATIO);
			MouseUtil.moveMouse(moveX, moveY);
			break;
		case OperationData.OPERATION_CLICK_DOWN:
			MouseUtil.leftClickDown(true);
			System.out.println("ÁÂÅ¬´©¸§");
			break;
		case OperationData.OPERATION_CLICK_UP:
			MouseUtil.leftClickDown(false);
			System.out.println("ÁÂÅ¬¶À");
			break;
		case OperationData.OPERATION_RIGHT_CLICK:
			MouseUtil.rightClick();
			System.out.println("¿ìÅ¬");
			break;
		case OperationData.OPERATION_TYPE_TEXT:
			MouseUtil.typeText(operation.getInputStr());
			break;
		case OperationData.OPERATION_DEL_TEXT:
			MouseUtil.delText();
			break;
		case OperationData.OPERATION_SCROLL_UP_DOWN:
			y = operation.getMoveY();
			System.out.println(y);
			break;
		case OperationData.OPERATION_SCROLL_UP_UP:
			y = y - operation.getMoveY();
			MouseUtil.ScrollUp(y);
			System.out.println(y);
		default:
			break;
		}
		
		return y;
	}
}

