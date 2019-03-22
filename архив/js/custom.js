$(document).ready(function(){
	var nameArray = {
		"1" : {
			"label" : "Товар номер раз",
			"description" : "Прикольная футолка",
			"price" : "1000",
			"status":0
		},
		"2" : {
			"label" : "Товар номер два",
			"description" : "Прикольная футолка 2",
			"price" : "1200",
			"status":0
		},
		"3" :{
			"label" : "Товар номер три",
			"description" : "Прикольная футолка 3",
			"price" : "800",
			"status":0
		}
	};
	var application = function(cardLayer,shopLayer){
		var card = [];
		var self = this;
		
		this.refreshCard = function(){
			var summ = 0;
			var result = [];
			$(cardLayer).empty();
			$(cardLayer).append('<ul>');
			$(cardLayer).find('ul').append(function(){
				card.forEach(function(item,i,card){
					result.push("<li>" + nameArray[item]['label'] + " : " + nameArray[item]['price'] + " .р</li>");
					summ +=parseInt(nameArray[item]['price']);
				});
				return result;				
			});


			
			$(cardLayer).find('ul').append('<li>Итого: ' + summ + ' р.</li>');
			console.log(nameArray);
		};
		this.cardControl = function(additem){
			if(card.indexOf(additem) != -1){
				card.splice(card.indexOf(additem),1);
			}
			else{
				card.push(additem);
			}
			self.refreshCard();
		}
		this.render = function(array){
			var that = this;
			//console.log(array);
			$(shopLayer).empty();
			
			$(shopLayer).append($('<ul>').addClass('pricelist')); 
			for(var key in array){
				$(shopLayer).find('ul').append(
					$('<li>')
					.addClass('item')
					.append(
						$('<div>')
						.html(array[key]['label'])
					)
					.append(
						$('<div>')
						.html(array[key]['price'] + " p.")
						.addClass('price')
					)
					.append(
						$('<div>')
						.html(array[key]['description'])
						.addClass('description')
					)
					.append(
						$('<input>')
						.attr('data-id',key)
						.attr('data-status',array[key]['status'])
						.attr('type','button')
						.attr('value','Купить')
						.on('click',function(){
							if($(this).attr('data-status') == 0){
								buy_status = 1;
							}
							else{
								buy_status = 0;
							}
							nameArray[$(this).attr('data-id')]['status'] = buy_status;
							self.cardControl($(this).attr('data-id'));
							that.render(nameArray);
							
						})
						.attr('value',function(){
							if($(this).attr('data-status') == 0){
								return "Купить";
							}
							else{
								return "Удалить";
							}							
						})
					)			
				);
				
			}
		}
		
	}
	
	var app = new application('#card','#calc');
	app.render(nameArray);
});