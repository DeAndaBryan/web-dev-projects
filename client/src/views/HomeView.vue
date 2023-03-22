<script setup lang="ts">
import { useSession } from '@/model/session';
const session = useSession();
</script>

<template>
    <div class="container">
      <div class="columns">
        <div class="column is-hidden-touch is-one-quarter">
          <div class="box is-small-hidden">
          </div>
        </div>

        <div class="column" v-if="session.user?.id==1">
          <div class="box has-text-centered ">
            <h1 class=""><strong>Today</strong></h1>
            <div class="columns is-multiline has-text-success ">
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold"> 
                  2 mi
                </h1>
                <caption class="caption">Distance</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  0 hr/s
                </h1>
                <caption class="caption">Duration</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  NaN mph 
                </h1>
                <caption class="caption">Avg Pace</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  0 kCal
                </h1>
                <caption class="caption">Calories</caption>
              </div>
            </div>
          </div>
          <div class="box has-text-centered ">
            <h1 class=""><strong>This Week</strong></h1>
            <div class="columns is-multiline has-text-success ">
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  4 mi
                </h1>
                <caption class="caption">Distance</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  2 hr/s
                </h1>
                <caption class="caption">Duration</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  NaN mph
                </h1>
                <caption class="caption">Avg Pace</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  0 kCal
                </h1>
                <caption class="caption">Calories</caption>
              </div>
            </div>
          </div>
          <div class="box has-text-centered ">
            <h1 class=""><strong>All Time</strong></h1>
            <div class="columns is-multiline has-text-success ">
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  4 mi

                </h1>
                <caption class="caption">Distance</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  2 hr/s
                </h1>
                <caption class="caption">Duration</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	">
                  NaN mph
                </h1>
                <caption class="caption">Avg Pace</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	">
                   0 kCal
                </h1>
                <caption class="caption">Calories</caption>
              </div>
            </div>
          </div>
        </div>

        <div class="column" v-if="session.user?.id==2">
          <div class="box has-text-centered ">
            <h1 class=""><strong>Today</strong></h1>
            <div class="columns is-multiline has-text-success ">
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold"> 
                  0 mi
                </h1>
                <caption class="caption">Distance</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  0 hr/s
                </h1>
                <caption class="caption">Duration</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  NaN mph 
                </h1>
                <caption class="caption">Avg Pace</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  0 kCal
                </h1>
                <caption class="caption">Calories</caption>
              </div>
            </div>
          </div>
          <div class="box has-text-centered ">
            <h1 class=""><strong>This Week</strong></h1>
            <div class="columns is-multiline has-text-success ">
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  3 mi
                </h1>
                <caption class="caption">Distance</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  3 hr/s
                </h1>
                <caption class="caption">Duration</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  NaN mph
                </h1>
                <caption class="caption">Avg Pace</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  0 kCal
                </h1>
                <caption class="caption">Calories</caption>
              </div>
            </div>
          </div>
          <div class="box has-text-centered ">
            <h1 class=""><strong>All Time</strong></h1>
            <div class="columns is-multiline has-text-success ">
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  3 mi

                </h1>
                <caption class="caption">Distance</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  3 hr/s
                </h1>
                <caption class="caption">Duration</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	">
                  NaN mph
                </h1>
                <caption class="caption">Avg Pace</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	">
                   0 kCal
                </h1>
                <caption class="caption">Calories</caption>
              </div>
            </div>
          </div>
        </div>

        <div class="column" v-if="session.user?.id==3">
          <div class="box has-text-centered ">
            <h1 class=""><strong>Today</strong></h1>
            <div class="columns is-multiline has-text-success ">
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold"> 
                  0 mi
                </h1>
                <caption class="caption">Distance</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  0 hr/s
                </h1>
                <caption class="caption">Duration</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  NaN mph 
                </h1>
                <caption class="caption">Avg Pace</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  0 kCal
                </h1>
                <caption class="caption">Calories</caption>
              </div>
            </div>
          </div>
          <div class="box has-text-centered ">
            <h1 class=""><strong>This Week</strong></h1>
            <div class="columns is-multiline has-text-success ">
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  4 mi
                </h1>
                <caption class="caption">Distance</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  2 hr/s
                </h1>
                <caption class="caption">Duration</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  NaN mph
                </h1>
                <caption class="caption">Avg Pace</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  0 kCal
                </h1>
                <caption class="caption">Calories</caption>
              </div>
            </div>
          </div>
          <div class="box has-text-centered ">
            <h1 class=""><strong>All Time</strong></h1>
            <div class="columns is-multiline has-text-success ">
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  4 mi

                </h1>
                <caption class="caption">Distance</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  2 hr/s
                </h1>
                <caption class="caption">Duration</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	">
                  NaN mph
                </h1>
                <caption class="caption">Avg Pace</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	">
                   0 kCal
                </h1>
                <caption class="caption">Calories</caption>
              </div>
            </div>
          </div>
        </div>

        <div class="column" v-if="!session.user">
          <div class="box has-text-centered ">
            <h1 class=""><strong>Today</strong></h1>
            <div class="columns is-multiline has-text-success ">
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  0 mi
                </h1>
                <caption class="caption">Distance</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  0 mi
                </h1>
                <caption class="caption">Duration</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  NaN mph 
                </h1>
                <caption class="caption">Avg Pace</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  0 mi
                </h1>
                <caption class="caption">Calories</caption>
              </div>
            </div>
          </div>
          <div class="box has-text-centered ">
            <h1 class=""><strong>This Week</strong></h1>
            <div class="columns is-multiline has-text-success ">
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  0 mi
                </h1>
                <caption class="caption">Distance</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  0 mi
                </h1>
                <caption class="caption">Duration</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  NaN mph
                </h1>
                <caption class="caption">Avg Pace</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  0 mi
                </h1>
                <caption class="caption">Calories</caption>
              </div>
            </div>
          </div>
          <div class="box has-text-centered ">
            <h1 class=""><strong>All Time</strong></h1>
            <div class="columns is-multiline has-text-success ">
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  0 mi

                </h1>
                <caption class="caption">Distance</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	"> 
                  0 mi
                </h1>
                <caption class="caption">Duration</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	">
                  NaN mph
                </h1>
                <caption class="caption">Avg Pace</caption>
              </div>
              <div class="column is-half">
                <h1 class="quarter has-text-success has-text-weight-bold	">
                   0 mi
                </h1>
                <caption class="caption">Calories</caption>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-hidden-touch is-one-quarter">
          <div class="box is-small-hidden">
            
          </div>
        </div>
      </div>
    </div>
</template>
<style>
  .caption {
    position: relative;
  }
</style>