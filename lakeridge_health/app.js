/**
*@file app.js
*
*@author Takuya Hirata - 100688080
*date 2018-11-19
*@version 1.0
*
*@purpose Explore and use the capabilities of the D3 library to create an interactive infographic
*or data visualization using SVG.
*
*@description Shows infographic using D3 and data from Likeridge Health.
*/

(function() {
    'use strict';

    d3.csv('https://gist.githubusercontent.com/Takuya-H23/868e48dec4f84b1eb974de97eacd79c3/raw/c9ef6433165e3c4eca43983f0c2b0e95bd79f4c5/userData.csv').then(function (data) {
       
        const lakeridge = data;
        const diseaseSite = [];
        const msg = [];
        const desc = [];
        const line = [{
            x1: 300,
            y1: 350,
            x2: 1100,
            y2: 350,
            stroke: '#f7941e',
            strokeWidth: 5
        }];
        const jobTitle = ['Title', 'Investigator', 'Lead Nurse', 'Site Date', 'Site Status'];
        const breast = lakeridge.filter(item => item.diseaseSite === 'Breast');
        const gastrointestinal = lakeridge.filter(item => item.diseaseSite === 'Gastrointestinal');
        const genitoUrinary = lakeridge.filter(item => item.diseaseSite === 'Genito-Urinary');
        const lung = lakeridge.filter(item => item.diseaseSite === 'Lung');
        const other = lakeridge.filter(item => item.diseaseSite === 'Other');
        const hematology = lakeridge.filter(item => item.diseaseSite === 'Hematology');
        let prevTarget;
        // let clickState = false;

        const textGenerater = (id, element, data, x, y, prop) => {
            d3.select('svg #page2 #projects #detail').append('g').attr('id', id);
            d3.select(element).selectAll('text').data(data).enter().append('text')
                .attr('x', x)
                .attr('y', y)
                .attr('text-anchor', 'start')
                .style('opacity', 0)
                .text(d => {
                    if(d[prop].length === 0) {
                        return 'N/A';
                    } else {
                        return d[prop];
                    }
                })
                .style('font-size', '1.2em')
                .style('font-family', 'Poppins')
                .transition().duration(1000).style('opacity', 1);
        };

        class TextData {
            constructor(x, y, text, fill, fontSize = 16, fontFamily = 'Poppins', fontStyle = 'bold') {
                this.x = x;
                this.y = y;
                this.text = text;
                this.fill = fill;
                this.fontSize = fontSize;
                this.fontFamily = fontFamily;
                this.fontStyle = fontStyle;
            }
        }

        msg.push(new TextData(700, 320, 'Lakeridge Health', '#444a4d', 90, 'Poppins'));
        desc.push(new TextData(100, 650, 'Click circle to display more information', '#444a4d', 25, 'Poppins'));

        // Create svg tag===============================================
        d3.select('#d3Wrapper').append('svg')
            .attr('width', 1400)
            .attr('height', 800);

        // page1======================================================
        d3.select('svg').append('g').attr('id', 'page1');

        d3.select('svg #page1').selectAll('text').data(msg).enter().append('text')
            .attr('x', d => d.x)
            .attr('y', d => d.y)
            .style('opacity', 0)
            .attr('text-anchor', 'middle')
            .text(d => d.text)
            .style('fill', d => d.fill)
            .style('font-size', d => `${d.fontSize}px`)
            .style('font-family', d => d.fontFamily)
            .transition().duration(1000).style('opacity', 1);

        d3.select('svg #page1').selectAll('line').data(line).enter().append('line')
            .attr('x1', d => d.x1)
            .attr('y1', d => d.y1)
            .attr('x2', d => d.x1)
            .attr('y2', d => d.y2)
            .attr('stroke', d => d.stroke)
            .attr('stroke-width', d => `${d.strokeWidth}px`)
            .transition().duration(1500)
            .attr('x2', d => d.x2)
            .attr('y2', d => d.y2);

        d3.select('svg #page1')
            .transition().delay(2000)
            .duration(1000).style('opacity', 0)
            .remove();

        setTimeout(page2, 3500);

        // page2=======================================================
        function page2() {

            d3.select('svg').append('image')
            .attr('xlink:href', './img/lakeridge-logo.png')
            .attr('x', 90)
            .attr('y', 10)
            .attr('width', '200px')
            .attr('height', '200px');

            function createCircle(arry, y, id) {
                d3.select('svg #page2 #projects').append('g').attr('id', id);

                d3.select(`svg #page2 #${id}`).selectAll('circle').data(arry).enter().append('circle')
                    .attr('cx', (d, i) => 400 + (50 * i))
                    .attr('cy', y)
                    .attr('r', 20)
                    .style('opacity', 0)
                    .attr('id', (d, i) => d.diseaseSite + i)
                    .style('fill', '#f7941e')
                    .transition().duration(1000).delay(2800).style('opacity', 1);
            }

            d3.select('svg').append('g').attr('id', 'page2');
    
            lakeridge.forEach(site => {
                if (!diseaseSite.includes(site.diseaseSite) && site.diseaseSite !== '') {
                    diseaseSite.push(site.diseaseSite);
                }
            });

            const diseaseSiteObject = diseaseSite.map(item => {
                let ob = {};
                ob.name = item;
                return ob;
            });
    
            d3.select('svg #page2').selectAll('text').data(diseaseSiteObject).enter().append('text')
                .attr('x', 100)
                .attr('y', (d, i) => 200 + (i * 70))
                .attr('id', d => d.name)
                .style('opacity', 0)
                .attr('text-anchor', 'start')
                .text(d => d.name)
                .style('font-size', '1.8em')
                .style('font-family', 'Poppins')
                .style('font-style', 'italic')
                .style('fill', '#444a4d')
                .transition().duration(1000).delay((d, i) => 500 + (i * 300))
                .style('opacity', 1);

            d3.select('svg #page2').append('g').attr('id', 'projects');

            createCircle(breast, 190, 'breast');
            createCircle(gastrointestinal, 260, 'gastrointestinal');
            createCircle(genitoUrinary, 330, 'genitoUrinary');
            createCircle(lung, 400, 'lung');
            createCircle(other, 470, 'other');
            createCircle(hematology, 540, 'hematology');


            d3.selectAll('svg #page2 #projects circle').on('mouseover', function() {
                d3.select(this).transition().duration(1000).style('fill', '#25aae1');
            })
            .on('mouseout', function() {
                d3.select(this).transition().duration(1000).style('fill', '#f7941e');
            });
        
            d3.select('svg').append('g').attr('id', 'desc');
            d3.select('svg #desc').selectAll('text').data(desc).enter().append('text')
                .attr('x', d => d.x)
                .attr('y', d => d.y)
                .style('opacity', 0)
                .text(d => d.text)
                .style('font-size', d => `${d.fontSize}px`)
                .style('font-family', d => d.fontFamily)
                .transition().duration(1500).delay(2200).style('opacity', 1);

            

            const projects = document.getElementById('projects');
            projects.addEventListener('click', function(e) {

                if(e.target.tagName === 'circle') {
                    // let prevElement;

                    d3.selectAll('svg #page2 text')
                        .style('fill', '#444a4d')
                        .style('font-weight', 'normal');

                    let target = [];
                    target.push(e.target.__data__);

                    d3.select(prevTarget).transition().duration(500).style('fill', '#f7941e');
                    d3.select('svg #page2 #projects #detail').remove();

                    d3.select(e.target).transition().duration(500).style('fill', '#25aae1');

                    d3.select('svg #page2 #projects').append('g').attr('id', 'detail');

                    d3.select('#detail').selectAll('text').data(target).enter().append('text')
                        .attr('x', 830)
                        .attr('y', 190)
                        .attr('text-anchor', 'start')
                        .style('opacity', 0) 
                        .text(d => d.diseaseSite)
                        .style('font-size', '2em')
                        .style('font-weight', 'bold')
                        .style('font-family', 'Poppins')
                        .style('fill', '#25aae1')
                        .transition().duration(1000).style('opacity', 1);

                    d3.select('svg #page2 #projects #detail').append('g').attr('id', 'role');
                    d3.select('#role').selectAll('text').data(jobTitle).enter().append('text')
                        .attr('x', 830)
                        .attr('y', (d, i ) => 250 + (50 * i))
                        .style('opacity', 0)
                        .text(d => `${d}:`)
                        .style('font-size', '1.2em')
                        .style('font-weight', 'bold')
                        .style('font-family', 'Poppins')
                        .transition().duration(1000).style('opacity', 1);

                    textGenerater('title', '#title', target, 890, 250, 'shortTitle');
                    textGenerater('investigator', '#investigator', target, 970, 300, 'investigator');
                    textGenerater('nurse', '#nurse', target, 960, 350, 'leadNurse');
                    textGenerater('date', '#date', target, 930, 400, 'siteDate');
                    textGenerater('siteStatus', '#siteStatus', target, 950, 450, 'siteStatus');

                    d3.select(`svg #page2 #${target[0].diseaseSite}`)
                        .transition().duration(1000)
                        .style('fill', '#25aae1');
                    // Update value to change fill to default.
                    // prevElement = d3.select(`svg #page2 #${target[0].diseaseSite}`);
                    // prevTarget = e.target;
                // clickState = !clickState;
                }
            });
          
        }
    });   
}());